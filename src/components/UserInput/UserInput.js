import React from "react";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { Container } from "@chakra-ui/react";

const uppy = new Uppy({
  meta: { type: "video" },
  restrictions: { maxNumberOfFiles: 1 },
  autoProceed: true,
});

uppy.on("complete", (result) => {
  const url = result.successful[0].uploadURL;
  // store.dispatch({
  //   type: "SET_USER_AVATAR_URL",
  //   payload: { url: url },
  // });
});

export default function UserInput() {
  return (
    <Container centerContent>
      <Dashboard
        uppy={uppy}
        locale={{
          strings: {
            // Text to show on the droppable area.
            // `%{browse}` is replaced with a link that opens the system file selection dialog.
            dropHereOr: "Drop here or %{browse}",
            // Used as the label for the link that opens the system file selection dialog.
            browse: "browse",
          },
        }}
      />
    </Container>
  );
}
