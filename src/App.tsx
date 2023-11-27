import { useEffect, useState } from "react";

import "./App.css";
import "./assets/fonts/fonts.css";

import {
  Button,
  Label,
  Library,
  SideBar,
  Card,
  LibraryCover,
  Icon,
  LibrarySongName,
  LibrarySongCredits,
  Headline,
} from "./components";
import { api } from "./services";
import * as GlobalTypes from "./types/global";
import { FlexBox } from "./components/utils";

function App() {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [library, setLibrary] = useState<GlobalTypes.Library>([]);

  useEffect(() => {
    async function fetchInitApp() {
      try {
        const response = await api.initializeApp();
        setLibrary(response.data.library);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
    fetchInitApp();
  }, []);

  const onShowMoreClick = () => {
    setIsSideBarExpanded(true);
  };

  const onShowLessClick = () => {
    setIsSideBarExpanded(false);
  };

  return (
    <>
      <SideBar isExpanded={isSideBarExpanded}>
        <Card className="side-bar-header">
          <Button>
            <Icon name="home" />
            <Label>Home</Label>
          </Button>
          <Button>
            <Icon name="search" />
            <Label>Search</Label>
          </Button>
        </Card>

        <Card>
          <Library>
            <FlexBox justifyContent="space-between">
              <Button>
                <Icon name="book" />
                <Label>Your Library</Label>
              </Button>
              <FlexBox gap="0">
                <Button>
                  <Icon name="plus" />
                </Button>
                {isSideBarExpanded ? (
                  <Button onClick={onShowLessClick}>
                    <Icon name="arrow-left2" />
                  </Button>
                ) : (
                  <Button onClick={onShowMoreClick}>
                    <Icon name="arrow-right2" />
                  </Button>
                )}
              </FlexBox>
            </FlexBox>
            {isLoading ? (
              <Label>loading records...</Label>
            ) : (
              <>
                {library.map((record) => (
                  <Button>
                    <FlexBox>
                      <LibraryCover
                        src={record.cover}
                        alt={record.name}
                        size="small"
                      />
                      <FlexBox
                        direction="column"
                        alignItems="flex-start"
                        gap="0.25rem"
                      >
                        <LibrarySongName>{record.name}</LibrarySongName>
                        <LibrarySongCredits>
                          {record.credits}
                        </LibrarySongCredits>
                      </FlexBox>
                    </FlexBox>
                  </Button>
                ))}
              </>
            )}
          </Library>
        </Card>
      </SideBar>

      <main>
        <FlexBox justifyContent="space-between">
          <div>
            <Icon name="arrow-left2" />
            <Icon name="arrow-right2" />
          </div>
          <div>
            <Icon name="bell" />
            <Icon name="user" />
            <Icon name="users" />
          </div>
        </FlexBox>

        <FlexBox direction="column" alignItems="flex-start">
          <Headline as="h1" variant="main">
            Good afternoon
          </Headline>
          {library.map((record) => (
            <Card>
              <FlexBox>
                <LibraryCover src={record.cover} alt="" />
                <LibrarySongName>{record.name}</LibrarySongName>
              </FlexBox>
            </Card>
          ))}
        </FlexBox>

        <FlexBox direction="column" alignItems="flex-start">
          <Headline as="h2" variant="sub">
            Your top mixes
          </Headline>
          {library.map((record) => (
            <Card>
              <FlexBox direction="column" alignItems="flex-start">
                <LibraryCover src={record.cover} alt="" />
                <LibrarySongName>{record.name}</LibrarySongName>
                <LibrarySongCredits>{record.credits}</LibrarySongCredits>
              </FlexBox>
            </Card>
          ))}
        </FlexBox>

        <FlexBox direction="column" alignItems="flex-start">
          <Headline as="h2" variant="sub">
            Made for you
          </Headline>
          {library.map((record) => (
            <Card>
              <FlexBox direction="column" alignItems="flex-start">
                <LibraryCover src={record.cover} alt="" />
                <LibrarySongName>{record.name}</LibrarySongName>
                <LibrarySongCredits>{record.credits}</LibrarySongCredits>
              </FlexBox>
            </Card>
          ))}
        </FlexBox>
      </main>
    </>
  );
}

/**
 * const DeclarativeView = ()=> {
  return (
    <Container>
      <ThemeProvider>
        <SideBar>
            <Button>
               <Icon name="home"/>
                  <Label>Home</Label>
              </Item>
            </Button>
             <Button>
                  <Icon name="search"/>
                  <Label>Search</Label>    
              </Button>
            <Library>
              <LibraryHeader>
                <Icon name="ilbrary" /> 
                <Label>Your Library</Label> 
                <Icon name="add" size={16} />
                <Icon name="arrow-right" size={16} />
              </LibraryHeader>
              <Tags>
                <Tag label="Playlists" />
                <Tag label="Artists" />
                <Tag label="Albums" />
                <Tag label="Podcasts" />
              </Tags>
              <SearchBar />
              
              <RecordCard />
              <RecordCard />
              <RecordCard />
              <RecordCard />
              <RecordCard />
              <RecordCard />
              <RecordCard />
              <RecordCard />
              
              </Library>
          <LayoutResizer />
        </SideBar>
        <Home>
          <Header>
            <nav>
              <Icon name="arrow-left" />
              <Icon name="arrow-right" />
            </nav>
            <Button>
              <Icon name="download"/>
              Install App 
            </Button>
            <Button>
              <Icon name="notifications"/>
            </Button>
            <Button>
              <Link to="/profile">
                <Image src="profile-pic.png" />
              </Link>
            </Button>
          </Header>
          
          <section>
            <Heading>Good afternoon</Heading>
            <RecentPlayedCard />
            <RecentPlayedCard />
            <RecentPlayedCard />
            <RecentPlayedCard />
            <RecentPlayedCard />
            <RecentPlayedCard />
          </section >
          
          <Recomendations>
            <Heading>Made for you</Heading>
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
          </Recomendations>
          
          <Recomendations>
            <Heading>Your top mixes</Heading>
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
          </Recomendations>
          
           <Recomendations>
            <Heading>Recently Played</Heading>
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
          </Recomendations>
          
          <Recomendations>
            <Heading>Recommended Radio</Heading>
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
          </Recomendations>
          
          <Recomendations>
            <Subtitle>Jump back in</Subtitle>
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
          </Recomendations
            
            
          <Recomendations>
            <Heading>Your Playlists</Heading>
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
          </Recomendations>
          
          <Recomendations>
            <Heading>Your favorite artists</Heading>
            <ArtistRecommendation />
            <ArtistRecommendation />
            <ArtistRecommendation />
            <ArtistRecommendation />
            <ArtistRecommendation />
            <ArtistRecommendation />
            <ArtistRecommendation />
            <ArtistRecommendation />           
          </Recomendations>
          
        </Home>
         <NowPlayingSideBar>
              <Label>Album title</Label>
              <Icon name="close" />
              <Cover />
              <SongName />
              <SongCredits />
              <Icon name="like" />
              <Icon name="context-dots" />
              
              <Card>
                <Heading>On Tour</Heading>
                <TourInfo />
                <TourInfo />
              </Card>
              
              <Card>
           
                <Heading>Next in queue</Heading>
                <Button>Open queue</Button>
                <Button>
                  <Icon name="music-note" />
                  <Cover>
                   <SongName />
                   <SongCredits />
                 </Button>  
              </Card>
              
         </NowPlayingSideBar>
        <AudioPlayer>
          <ArtistInfo>
            <Cover />
             <SongName />
             <SongCredits />
             <Icon name="love" />
          </ArtistInfo>
          <AudioPlayerControls>
            <Icon name="random" />
             <Icon name="song-back" />
             <Icon name="play" />
             <Icon name="song-next" />
             <Icon name="repeat" />
             <AudioPlaybackBar />
          </AudioPlayerControls>
           <AudioDeviceControls>
             <Icon name="now-playing-view" />
             <Icon name="queue" />
             <Icon name="laptop" />
             <VolumeBar />
             <Icon name="full-screen" />
           </AudioDeviceControls>
        </AudioPlayer>
      </ThemeProvider>
     </Container>
  )
}
 */
export default App;
