describe("Window", function() {

  it("has a sequence of length two.", function() {
    expect(window.Sequences.length).toEqual(2);
  });

  it("is requested to shutdown correctly", function() {
    spyOn(chrome, "runtime").and.callThrough();
    spyOn(chrome.runtime, "sendMessage").and.returnValue(null);
    window.Authentication.login([0]);
    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({shutdown: "STOP"}, jasmine.any(Function));
  });

  it("is does not send shutdown request for empty sequence", function() {
    spyOn(chrome, "runtime").and.callThrough();
    spyOn(chrome.runtime, "sendMessage").and.returnValue(null);
    window.Authentication.login([]);
    expect(chrome.runtime.sendMessage).not.toHaveBeenCalledWith();
  });

  it("is does not send shutdown request for sequence greater than one", function() {
    spyOn(chrome, "runtime").and.callThrough();
    spyOn(chrome.runtime, "sendMessage").and.returnValue(null);
    window.Authentication.login([0, 2]);
    expect(chrome.runtime.sendMessage).not.toHaveBeenCalledWith();
  });


  // it("should be able to play a Song", function() {
  //   player.play(song);
  //   expect(player.currentlyPlayingSong).toEqual(song);

  //   //demonstrates use of custom matcher
  //   expect(player).toBePlaying(song);
  // });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});
