# float for spotify 🎧

after [float for discord](https://github.com/v1ol3tr0se/float-vencord) spotify was the next thing on my screen that looked squished, so it got the same treatment

same idea as [maenDisease/Float](https://github.com/maenDisease/Float): panels rest as thin strips and slide open when you hover them

- your library becomes a strip of covers and pushes the page right when it opens
- the right sidebar (now playing, queue, friend activity) does the same from the other side. the page keeps its width and just moves
- the extra top bar buttons only show while you hover the bar
- you can turn off player bar buttons one by one (lyrics, queue, connect, volume, miniplayer)
- width presets at 1100, 900 and 820 px

it only kicks in when spotify is 1300 px wide or less. full width spotify stays exactly how your theme draws it

### you'll need
spotify and spicetify. it's an extension, not a theme, so any theme works with it (or none)

### installing
```shell
cp float.js ~/.config/spicetify/Extensions/
spicetify config extensions float.js
spicetify apply
```

on windows the folder is `%appdata%\spicetify\Extensions`

leave your library in spotify's collapsed mode (icons only). float opens it on hover, that's kind of the point

### changing stuff
the knobs are in `:root` at the top of the css inside `float.js`. after editing run `spicetify apply` again

- `--float-animations` 1, 0 makes the panels snap open and shut
- `--float-sidebar-width` 72, library strip in px, 0 hides it
- `--sidebar-hover-width` 280px, library when open
- `--slide-window-on-hover` 1, 0 makes the library cover the page instead
- `--float-members-width` 72px, right strip (0 hides it)
- `--members-hover-width` 320px, right sidebar when open. spotify won't go under 280px
- `--slide-window-on-members-hover` 1
- `--sidebar-hover-delay` / `--members-hover-delay` 0s
- `--sidebar-transition-duration` / `--members-transition-duration` 0.4s
- `--playbar-lyrics` / `-queue` / `-connect` / `-volume` / `-miniplayer` flex

want it at any width? change the `1300px` in `@media (max-width: 1300px)`

working on the repo itself? `float.js` is built from `src/float.ts`, edit that and run `yarn build`

### limits
spotify never gets narrower than 800 px or shorter than 600 px, a smaller window just gets cropped. so nothing below 800 can do anything. i tried, spotify said no

if you change the css yourself, keep `:hover` on the panels and never on stuff like `> *` or bare tags. chromium groups every hover rule together and one sloppy one makes spotify restyle half the page every time your mouse moves
