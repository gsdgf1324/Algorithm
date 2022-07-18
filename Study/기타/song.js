/*
A playlist is considered a repeating playlist if any of the songs contain a reference to a previous song in the playlist. Otherwise, the playlist will end with the last song which points to undefined.

Implement the method isRepeatingPlaylist that, efficiently with respect to time used, returns true if a playlist is repeating or false if it is not.

For example, the following code prints "true" as both songs point to each other.
 */

class Song {
    name;
    nextSong;

    constructor(name) {
        this.name = name;
    }

    /**
     * @return {boolean} true if the playlist is repeating, false if not.
     */
    isRepeatingPlaylist() {

        let checkArr = new Set();
        // let checkArr = [];
        let current = this;
        let nextSong = this.nextSong;

        while (nextSong) {

            checkArr.add(current.name);
            // checkArr.push(current.name);

            if (checkArr.has(nextSong.name)) {
                // if (checkArr.includes(nextSong.name)) {
                return true;
            }

            current = nextSong;
            nextSong = nextSong.nextSong;
        }

        return false;
    }
}

let first = new Song("Hello");
let second = new Song("Eye of the tiger");

first.nextSong = second;
second.nextSong = first;

console.log(first.isRepeatingPlaylist());