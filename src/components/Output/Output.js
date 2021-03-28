import React from "react";

export default function Output() {
  let variable = "some string"; // this is boilerplate example
  var file_name, transcript;
  file_name = 'test.txt';
  transcript = "Batman has always been my favourite superhero ever since the first time I heard about him because he his human with no powers, also he is much more questionable than any other superhero. The story of the film is about Batman, Lieutenant James Gordon, and new district attorney Harvey Dent beginning to succeed in rounding up the criminals that plague Gotham City. They are unexpectedly challenged when a mysterious criminal mastermind known as the Joker appears in Gotham. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and to improve his technology (which introduces the recreation of the Batcycle, known as the Batpod and the Batsuit was redesigned) to stop the madman's campaign of destruction. During the course of the film, a love triangle develops between Bruce Wayne, Dent and Rachel Dawes.  There are now six Batman films and I must say that The Dark Knight is the best out of all of them. The title is good because that is what Batman actually is. It has been 3 years for the adventure to continue from Batman Begins but that entire wait was worth it.";

  return (
    <>
      <h1>Output</h1>
      <p>Here's an example </p>
      document.write (file_name);
      document.write (transcript);
    </>
  );
}
