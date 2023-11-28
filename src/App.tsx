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
  LibraryLoadingRecord,
  LibraryLoadingShorcut,
} from "./components";
import { api } from "./services";
import * as GlobalTypes from "./types/global";
import { FlexBox, Grid } from "./components/utils";
import { useLibrary } from "./services/store/library";

function App() {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);
  const { getLibrary, ...library } = useLibrary();
  console.log(library);

  useEffect(() => {
    if (library.status.current === "unset") {
      getLibrary();
    }
  }, [library.status]);

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
            {library.status.current === "loading" ? (
              [0, 1, 2, 3, 4, 5].map((key) => (
                <LibraryLoadingRecord key={key} />
              ))
            ) : (
              <>
                {library.records.data.map((record) => (
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
          <Grid rows="1fr 1fr" columns="1fr 1fr 1fr" gap="0.5rem">
            {library.status.current === "loading" &&
              [0, 1, 2, 3, 4, 5].map((key) => (
                <LibraryLoadingShorcut key={key} />
              ))}
            {library.records.data.map((record) => (
              <Card padding="0">
                <FlexBox justifyContent="flex-start">
                  <LibraryCover src={record.cover} alt="" />
                  <LibrarySongName>{record.name}</LibrarySongName>
                </FlexBox>
              </Card>
            ))}
          </Grid>
        </FlexBox>

        <FlexBox direction="column" alignItems="flex-start" width="100%">
          <Headline as="h2" variant="sub">
            Your top mixes
          </Headline>
          <Grid columns="repeat(6, 1fr)" rows="1fr" gap="1rem">
            {library.records.data.map((record) => (
              <Card>
                <FlexBox direction="column" alignItems="flex-start">
                  <LibraryCover src={record.cover} alt="" size="fluid-width" />
                  <LibrarySongName>{record.name}</LibrarySongName>
                  <LibrarySongCredits>{record.credits}</LibrarySongCredits>
                </FlexBox>
              </Card>
            ))}
          </Grid>
        </FlexBox>

        <FlexBox direction="column" alignItems="flex-start" width="100%">
          <Headline as="h2" variant="sub">
            Made for you
          </Headline>
          <Grid columns="repeat(6, 1fr)" rows="1fr" gap="1rem">
            {library.records.data.map((record) => (
              <Card>
                <FlexBox direction="column" alignItems="flex-start">
                  <LibraryCover src={record.cover} alt="" size="fluid-width" />
                  <LibrarySongName>{record.name}</LibrarySongName>
                  <LibrarySongCredits>{record.credits}</LibrarySongCredits>
                </FlexBox>
              </Card>
            ))}
          </Grid>
        </FlexBox>
      </main>
    </>
  );
}

export default App;
