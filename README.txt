"insta_followers_check" is a browser extension (built around firefox, but will work on other chromium browsers with minor tweaks).
it compares your 'followers' and 'following' lists.
it shows -
  a. which accounts you follow, but they don't follow you back.
  b. which accounts you are followed by, but don't follow back.

usage (for firefox, but similar for chrome etc.):
1. install extension...
   a. ...either as zip from github itself
      i.   extract
      ii.  visit about:debugging#/runtime/this-firefox in firefox.
      iii. click 'Load Temporary Add-on...'
      iv.  select the file 'manifest.json' from the folder extracted in (i).
   b. ...or from (https://addons.mozilla.org/en-US/firefox/)
      TODO
2. visit the instagram profile page (https://www.instagram.com/<username>)
3. click on 'followers' or 'following', and reload page.
4. you have 20 sec if on 'followers', and 30 if on 'following', to scroll through the list (to transfer the list of followers/following accounts to the extension).
5. once done with one list, repeat (3) and (4) for other list (one of follower or following).
6. open extension popup from the jigsaw puzzle icon in the top-right of the browser.
7. click buttons and see the relevant lists of accounts on the popup.

easiest to use with smaller accounts (few followers and/or following).
it was also called 'pettygram' at some stage of its 'development' for obvious reasons.
