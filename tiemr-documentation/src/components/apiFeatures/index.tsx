import React, { ReactNode, useState } from "react";
import "./styles.api.css";
import CopyIcon from "./copy";

export default function APICallWebsite(): JSX.Element {
  const [CHANNEL_NAME, SETCHANNEL_NAME] = useState("");
  const [VIDEO_ID, SETVIDEO_ID] = useState("");
  const [output, setOutput] = useState("");
  const [createdAt, setcreatedAt] = useState("");
  const [copyButton, setcopyButton] = useState<string | ReactNode>(
    <CopyIcon />
  );

  const extractVideoId = (url: any) => {
    const parts = url.split("/");
    const lastPartWithQuery = parts[parts.length - 1];
    const lastPart = lastPartWithQuery.split("?")[0];
    if (!isNaN(lastPart)) {
      return lastPart;
    } else {
      return null;
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText("https://ringomar.github.io/timer?time=" + text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        setcopyButton("Copied!");

        // After 2 seconds, revert the button text back to "Copy"
        setTimeout(() => {
          setcopyButton(<CopyIcon />);
        }, 1700);
      })
      .catch((error) => {
        console.error("Unable to copy text to clipboard:", error);
        setcopyButton("error");
      });
  };

  const makeAPICall = async () => {
    try {
      let gqlQuery = {
        operationName: "VideoMetadata",
        query:
          "query VideoMetadata($channelLogin: String!, $videoID: ID!) {  user(login: $channelLogin) { id primaryColorHex isPartner profileImageURL(width: 70) lastBroadcast { id startedAt __typename } __typename }  currentUser { id __typename } video(id: $videoID) {   id title description previewThumbnailURL(height: 60, width: 90) createdAt viewCount publishedAt lengthSeconds broadcastType owner { id login displayName __typename } game { id slug boxArtURL name displayName __typename }  __typename }}",
        variables: {
          channelLogin: CHANNEL_NAME.toLowerCase(),
          videoID: extractVideoId(VIDEO_ID),
        },
      };

      const response = await fetch("https://gql.twitch.tv/gql", {
        method: "post",
        headers: {
          "client-id": "kimne78kx3ncx6brgo4mv6wki5h1ko",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gqlQuery),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const VideoMetadata = await response.json();

      // Check if the video property is null
      if (VideoMetadata.data?.video === null) {
        throw new Error("Bad request: No video found");
      }
      setcreatedAt(VideoMetadata.data.video.createdAt);
      setOutput(JSON.stringify(VideoMetadata, null, 2));
    } catch (error) {
      console.error("Error:", error);
      setOutput("Error occurred. Please try again. " + error);
    }
  };

  return (
    <div className="container container-api">
      <h1>Retrieve Stream Start Time</h1>
      <p>
        This page enables you to fetch information about a Twitch stream, like
        its start time and other details, using an API call. You just need to
        provide the <strong className="apistrong">channel name</strong> and the{" "}
        <strong className="apistrong">video ID</strong>, and it will handle the
        rest, giving you the data you need for your application.
      </p>
      <div className="apiContent">
        <div className="callcenter">
          <div className="gridContainer">
            <div className="action1">
              <h1>Step One: Get the Vod</h1>
            </div>
            <div className="action2">
              <h1>Step Two: Copy Url</h1>
            </div>
            <div className="getter">
              <div className="name">
                <div className="form-inline">
                  <div className="form-group">
                    <label htmlFor="name" className="form-field">
                      TWITCH USER NAME
                    </label>
                    <input
                      type="input"
                      className="form-field"
                      placeholder="KaiCeant"
                      value={CHANNEL_NAME}
                      onChange={(e) => SETCHANNEL_NAME(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="vod">
                <div className="form-inline">
                  <div className="form-group">
                    <label htmlFor="name" className="form-field">
                      VOD LINK
                    </label>
                    <input
                      type="text"
                      placeholder="2000000000"
                      className="form-field"
                      value={VIDEO_ID}
                      onChange={(e) => SETVIDEO_ID(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="smtBtn">
                <button className="submitButton" onClick={makeAPICall}>
                  Load Stream Data
                </button>
              </div>
            </div>
            <div className="setter">
              <div className="codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                <pre
                  className="prism-code language-text codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar"
                  style={{
                    color: "rgb(248, 248, 242)",
                    backgroundColor: "rgb(40, 42, 54)",
                  }}
                >
                  <code className="codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module">
                    <span
                      className="token-line"
                      style={{ color: "rgb(248, 248, 242)" }}
                    >
                      <span className="token plain">
                        https://ringomar.github.io/timer?time=
                        <strong>{createdAt}</strong>
                      </span>
                    </span>
                  </code>
                </pre>
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard(createdAt)}
                >
                  {copyButton}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="debugContain">
          <h3>RAW OUTPUT</h3>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}
