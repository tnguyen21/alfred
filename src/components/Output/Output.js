import React from "react";

export default function Output() {
  let variable = "some string"; // this is boilerplate example

  return (
    <>
      <b>What you should expect</b>
      <p>Once you upload your video, we'll transcribe it and it should look like this!</p>
      &nbsp;&nbsp;
      <div className="example_received_output">
        <p><b>File name: </b>test.txt </p>
        <p><b>Transcribed text: </b>"Batman has always been my favourite superhero ever since the first time I heard about him because he his human with no powers, also he is much more questionable than any other superhero. The story of the film is about Batman, Lieutenant James Gordon, and new district attorney Harvey Dent beginning to succeed in rounding up the criminals that plague Gotham City. They are unexpectedly challenged when a mysterious criminal mastermind known as the Joker appears in Gotham. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and to improve his technology (which introduces the recreation of the Batcycle, known as the Batpod and the Batsuit was redesigned) to stop the madman's campaign of destruction. During the course of the film, a love triangle develops between Bruce Wayne, Dent and Rachel Dawes.  There are now six Batman films and I must say that The Dark Knight is the best out of all of them. The title is good because that is what Batman actually is. It has been 3 years for the adventure to continue from Batman Begins but that entire wait was worth it. Gotham city is very Gothic looking and is very haunting and visionary. The whole movie is charged with pulse-pounding suspense, ingenious special effects and riveting performances from a first-rate cast especially from Heath Ledger who gave an Oscar nomination performance for best supporting-actor. It is a shame that he can't see his terrific work on-screen. The cinematography is excellent which is made so dark & sinister that really did suit the mood for the film. Usually sequels don't turn out to be better than the original but The Dark Knight is one of those rare sequels that surpasses the original like The Godfather 2. I also really liked the poster where the building is on fire in a Bat symbol & Batman is standing in front of it. Christopher Nolan is a brilliant director and his film Memento is one of my most favourite films. He hasn't made 10 movies yet and 3 of them are already on the IMDb top 250. Overall The Dark Knight is the kind of movie that will make the audience cheer in the end instead of throwing fruit & vegetables on the screen."</p>
      </div>
      &nbsp;&nbsp;
      <div className="example_new_output">
        <p><b>New output:</b></p>
        <p>- Batman, Lieutenant James Gordon, and new district attorney Harvey Dent beginning to succeed in rounding up the criminals that plague Gotham City.</p>
        <p>- Joker appears in Gotham</p>
        <p>- Batman's struggle against the Joker becomes deeply personal, forcing him to confront everything he believes.</p>
        <p>- Love triangle between Bruce Wayne, Dent, and Dawes develops</p>
        <p>- There are six Batman files</p>
      </div>
    </>
  );
}
