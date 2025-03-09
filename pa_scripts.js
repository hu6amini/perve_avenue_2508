//Menuwrap icons
function waitForElement(e,t){const n=new MutationObserver((i=>{for(const o of i)if("childList"===o.type&&document.querySelector(e)){n.disconnect(),t(document.querySelector(e));break}})),i=document.querySelector(".menuwrap");i&&n.observe(i,{childList:!0,subtree:!0})}function addIdsToMenuItems(e){const t=e.querySelector(".left");t&&(t.style.visibility="visible"),e.querySelectorAll(".left li.menu").forEach((e=>{const t=e.querySelector("a");if(t){const n=t.getAttribute("href"),i=(t.innerHTML.trim(),t.querySelector("span")?.innerHTML.trim());e.querySelector(".nick")?e.id="nick":"https://msg.forumcommunity.net/?act=Msg&CODE=01&c=655775"===n?e.id="messenger":"https://msg.forumcommunity.net/?act=UserCP&CODE=26&c=655775"===n?e.id="topics":"#notifications"===n?e.id="notif":e.querySelector('form[action="/?act=Mod"]')||["&nbsp;Moderation","&nbsp;Moderazione","&nbsp;Moderación","&nbsp;Modération","&nbsp;Mäßigung","&nbsp;Moderação"].includes(i)?e.id="mod":(["&nbsp;Administration","&nbsp;Amministrazione","&nbsp;Administración","&nbsp;Verwaltung","&nbsp;Administração"].includes(i)||"https://www.forumcommunity.net/?cid=655775"===n)&&(e.id="admin"),"&nbsp;Messenger"===i&&(e.id="messenger")}})),e.querySelectorAll(".left li:not(.menu)").forEach((e=>{const t=e.querySelector("a");t&&("HOME"===t.textContent.trim()?e.id="pahome":"/latestupdates"===t.getAttribute("href")&&(e.id="updates"))}))}waitForElement(".menuwrap",addIdsToMenuItems);
//Image async
function addAsyncDecoding(){document.querySelectorAll("img").forEach(t=>{!t.hasAttribute("decoding")&&(t.setAttribute("decoding","async")),!t.hasAttribute("loading")&&!t.hasAttribute("data-src")&&!t.classList.contains("lazyload")&&!t.classList.contains("lazyloading")&&!t.classList.contains("lazyloaded")&&!t.closest(".slick_carousel")&&t.setAttribute("loading","lazy")}),document.querySelectorAll("iframe:not([loading])").forEach(t=>t.setAttribute("loading","lazy"))}addAsyncDecoding();let debounceTimeout;function debounceMutation(){clearTimeout(debounceTimeout),debounceTimeout=setTimeout(()=>{addAsyncDecoding()},200)}const imasyncObserver=new MutationObserver(debounceMutation);imasyncObserver.observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1});
//Emojione 
function processEmojisInColorClass(){document.querySelectorAll(".post .color,#loading .color,.summary .color,.st-emoji-epost-content.color,#notifications-modal .notification-text").forEach(e=>{e.dataset.emojiProcessed||(e.innerHTML=emojione.toImage(e.innerHTML),e.dataset.emojiProcessed="true")})}processEmojisInColorClass();const emojiObserver=new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{1===e.nodeType&&(e.matches(".post .color,#loading .color,.summary .color,.st-emoji-epost-content.color,#notifications-modal .notification-text")?requestIdleCallback(()=>{e.innerHTML=emojione.toImage(e.innerHTML),e.dataset.emojiProcessed="true"}):requestIdleCallback(()=>{e.querySelectorAll(".post .color,#loading .color,.summary .color,.st-emoji-epost-content.color,#notifications-modal .notification-text").forEach(e=>{e.dataset.emojiProcessed||(e.innerHTML=emojione.toImage(e.innerHTML),e.dataset.emojiProcessed="true")})}))})})});emojiObserver.observe(document.body,{childList:!0,subtree:!0});
//Favicons 
function updateFaviconsForLinks(o){o.forEach((o=>{if(!(o.closest(".spoiler .code_top a")||o.closest(".fancyborder a")||o.closest(".quote_top a")||o.closest(".ve-content [data-type=mention]")||o.querySelector("img")||o.matches(".color div[align='center'] a")&&o.hasAttribute("data-readmore-toggle"))){var e=o.href.includes("youtu.be")?"https://www.google.com/s2/favicons?domain=youtube.com":"https://www.google.com/s2/favicons?domain="+o.href;o.style.backgroundImage="url('"+e+"')",o.style.backgroundSize="16px 16px",o.style.backgroundPosition="left center",o.style.backgroundRepeat="no-repeat",o.style.paddingLeft="19px",o.matches(".quote a,.tmsg a")&&(o.style.backgroundSize="14px 14px",o.style.paddingLeft="17px")}}))}updateFaviconsForLinks(document.querySelectorAll(".post .color a,.summary .color a,#loading .color a,#search .color a,span.tmsg a"));const faviconObserver=new MutationObserver((o=>{o.forEach((o=>{updateFaviconsForLinks(o.target.querySelectorAll(".post .color a,.summary .color a,#loading .color a,#search .color a,span.tmsg a"))}))}));faviconObserver.observe(document.body,{childList:!0,subtree:!0});
//Light gallery 
const postColors=document.querySelectorAll(".post .color,.summary .list li .color.Item");postColors.forEach(t=>{t.querySelectorAll('img:not(.emojione):not(.signature img):not([src^="https://img.forumfree.net/html/emoticons/new"]):not([src^="https://img.forumfree.net/html/mime_types"])').forEach(t=>{if(!(t.alt&&t.alt.startsWith(":")||"a"===t.parentNode.tagName.toLowerCase()&&t.src.startsWith("https://www.google.com/s2/favicons"))){const e=t.parentNode,n=t.getAttribute("data-src")||t.src;if("a"===e.tagName.toLowerCase()){(e.href===n||e.getAttribute("href")===n)&&e.setAttribute("data-lightbox","gallery")}else{const o=document.createElement("a");o.href=n,o.setAttribute("data-lightbox","gallery"),e.insertBefore(o,t),o.appendChild(t)}}});lightGallery(t,{selector:'a[data-lightbox="gallery"]'})});
//Slick carousel 
$('.slick_carousel').slick({slidesToShow:1,slidesToScroll:1,autoplay:true,autoplaySpeed:3820,dots:true,infinite:true,centerMode:true,lazyLoad:'ondemand',pauseOnFocus:false});
//Avatar pack_1
!function() {
  const colors = ["#ff7770", "#ff6b6b", "#ff5154", "#ffcb69", "#fdc26d", "#ffa96c", "#ff9f1c", "#ff8f5c", "#9ce37d", "#74c365", "#16c172", "#3ab795", "#4ecdc4", "#2dc7ff", "#0eb1d2", "#009bf5", "#a3bcf9", "#9b9ece", "#9792e3", "#8075ff", "#b455b0", "#a755c2", "#a5acb5", "#889696"];

  const defaultAvatars = [
    "https://res.cloudinary.com/dbdf6gwgo/image/upload/v1674337715/forum/Avatar/default_avatar_zpw3zz.svg",
    "https://res.cloudinary.com/dbdf6gwgo/image/upload/v1676109015/forum/Avatar/robot_snynw7.svg"
  ];

  // Cache for profile avatars
  const profileCache = new Map();

  // Cache for closest() results
  const closestCache = new WeakMap();

  // Cache for querySelector() results
  const querySelectorCache = new WeakMap();

  function getFirstValidCharacter(name) {
    const letters = name.match(/[A-Za-z]/);
    if (letters) return letters[0].toUpperCase();

    const numbers = name.match(/[0-9]/);
    if (numbers) return numbers[0];

    return name.match(/[^A-Za-z0-9]/)?.[0] || "?";
  }

  function createAvatarSpan(name) {
    const char = getFirstValidCharacter(name);
    const span = document.createElement("span");
    span.className = "avatar";
    span.textContent = char;
    span.style.backgroundColor = getColorForCharacterCount(name.length);
    span.style.color = "#F7FFF7";
    return span;
  }

  function getColorForCharacterCount(length) {
    const step = Math.ceil(1 / colors.length);
    const index = Math.min(Math.floor(length / step), colors.length - 1);
    return colors[index];
  }

  function createAvatarElement(profileAvatarImg, userElement, profileUrl, fullName) {
    const avatarElement = document.createElement("a");
    avatarElement.className = "avatar";
    avatarElement.href = profileUrl; // Set the href to the profile URL

    if (profileAvatarImg && !defaultAvatars.includes(profileAvatarImg.src)) {
      // Use actual profile avatar
      const img = document.createElement("img");
      img.setAttribute("data-src", profileAvatarImg.src); // Lazy loading
      img.classList.add("lazyload");
      img.decoding = "async";
      avatarElement.appendChild(img);
    } else {
      // Create first-letter avatar
      const name = fullName || userElement.textContent.trim();
      avatarElement.appendChild(createAvatarSpan(name));
    }

    return avatarElement;
  }

  function fetchAvatarForUser(profileLink, userElement, insertBeforeElement) {
    const profileUrl = profileLink.href;

    // Check if the profile is already cached
    if (profileCache.has(profileUrl)) {
      const { profileAvatarImg, fullName } = profileCache.get(profileUrl);
      const avatarElement = createAvatarElement(profileAvatarImg, userElement, profileUrl, fullName);
      insertAvatar(avatarElement, insertBeforeElement);
    } else {
      // Fetch profile data
      fetch(profileUrl)
        .then(response => response.text())
        .then(html => {
          const profileDoc = new DOMParser().parseFromString(html, "text/html");
          const profileAvatarImg = profileDoc.querySelector(".profile .avatar img");
          const fullName = profileDoc.querySelector(".profile .nick")?.textContent.trim();
          profileCache.set(profileUrl, { profileAvatarImg, fullName }); // Cache the result
          const avatarElement = createAvatarElement(profileAvatarImg, userElement, profileUrl, fullName);
          insertAvatar(avatarElement, insertBeforeElement);
        })
        .catch(error => {
          console.error("Error fetching profile:", error);
          // Fallback: Create a first-letter avatar
          const avatarElement = createAvatarElement(null, userElement, profileUrl);
          insertAvatar(avatarElement, insertBeforeElement);
        });
    }
  }

  function insertAvatar(avatarElement, insertBeforeElement) {
    // Cache closest() results
    const isSummaryList = closestCache.get(insertBeforeElement)?.summary || insertBeforeElement.closest(".summary .list li");
    const isPopup = closestCache.get(insertBeforeElement)?.popup || insertBeforeElement.closest(".popup.pop_points ol.users li");
    const isBoardStats = closestCache.get(insertBeforeElement)?.boardStats || insertBeforeElement.closest(".stats .zz .users li");
    const isSideStats = closestCache.get(insertBeforeElement)?.sideStats || insertBeforeElement.closest(".side_stats.sidebox .users li");
    const isTagObject = closestCache.get(insertBeforeElement)?.tagObject || insertBeforeElement.closest("#tagObject li");
    const isEmojiPostAuthor = closestCache.get(insertBeforeElement)?.emojiPostAuthor || insertBeforeElement.closest(".st-emoji-epost-author");
    const isSendMainBg = closestCache.get(insertBeforeElement)?.sendMainBg || insertBeforeElement.closest(".send .mainbg");

    // Insert the avatar at the start of the .left.Sub.Item for summary list avatars
    if (isSummaryList) {
      const leftSubItem = insertBeforeElement.querySelector(".left.Sub.Item");
      if (leftSubItem) {
        // Wrap the avatar and .nick in a .summary_details div
        const summaryDetailsDiv = document.createElement("div");
        summaryDetailsDiv.className = "summary_details";

        // Move the .nick element into the .summary_details div
        const nickElement = leftSubItem.querySelector(".nick");
        if (nickElement) {
          summaryDetailsDiv.appendChild(nickElement);
        }

        // Add the avatar to the .summary_details div
        summaryDetailsDiv.appendChild(avatarElement);

        // Insert the .summary_details div at the start of .left.Sub.Item
        leftSubItem.insertBefore(summaryDetailsDiv, leftSubItem.firstChild);
      }
    } else if (isPopup && document.body.matches("#topic, #search")) {
      // Insert the avatar at the start of the <li> for popup avatars ONLY if body has ID #topic or #search
      insertBeforeElement.insertBefore(avatarElement, insertBeforeElement.firstChild);
    } else if (isBoardStats && document.body.matches("#board")) {
      // Insert the avatar at the start of the <li> for board stats avatars ONLY if body has ID #board
      insertBeforeElement.insertBefore(avatarElement, insertBeforeElement.firstChild);
    } else if (isSideStats && document.body.matches("#blog")) {
      // Insert the avatar at the start of the <li> for side_stats.sidebox avatars ONLY if body has ID #blog
      insertBeforeElement.insertBefore(avatarElement, insertBeforeElement.firstChild);
    } else if (isTagObject && document.body.matches("#board")) {
      // Insert the avatar at the start of the <li> for tag avatars ONLY if body has ID #board
      insertBeforeElement.insertBefore(avatarElement, insertBeforeElement.firstChild);
    } else if (isEmojiPostAuthor && document.body.matches("#topic")) {
      // Insert the avatar at the start of the <li> for emoji post authors ONLY if body has ID #topic
      insertBeforeElement.insertBefore(avatarElement, insertBeforeElement.firstChild);
    } else if (isSendMainBg) {
      // Wrap avatar in a .send_av div and insert at the start of .mainbg
      const sendAvDiv = document.createElement("div");
      sendAvDiv.className = "send_av";
      sendAvDiv.appendChild(avatarElement);

      // Insert the .send_av div at the start of .mainbg
      if (!insertBeforeElement.querySelector(".send_av")) {
        insertBeforeElement.insertBefore(sendAvDiv, insertBeforeElement.firstChild);
      }
    } else if (insertBeforeElement.closest(".send")) {
      // Wrap avatar in a .send_av div ONLY if inside a .send element
      const sendAvDiv = document.createElement("div");
      sendAvDiv.className = "send_av";
      sendAvDiv.appendChild(avatarElement);

      // Insert the .send_av div before the specified element
      if (!insertBeforeElement.previousElementSibling || !insertBeforeElement.previousElementSibling.classList.contains("send_av")) {
        insertBeforeElement.parentNode.insertBefore(sendAvDiv, insertBeforeElement);
      }
    } else {
      // Insert the avatar directly if not inside a .send element
      if (!insertBeforeElement.previousElementSibling || !insertBeforeElement.previousElementSibling.classList.contains("avatar")) {
        insertBeforeElement.parentNode.insertBefore(avatarElement, insertBeforeElement);
      }
    }
  }

  function replaceBigListAvatars(element) {
    if (document.body.matches("#board, #forum, #blog, #search")) {
      const userLink = querySelectorCache.get(element)?.userLink || element.querySelector('a[href*="act=Profile&MID="]');
      if (userLink) {
        querySelectorCache.set(element, { userLink });
        fetchAvatarForUser(userLink, userLink, element);
      }
    }
  }

  function replacePopupAvatars(element) {
    if (document.body.matches("#topic, #search")) {
      const userLink = querySelectorCache.get(element)?.userLink || element.querySelector('a[href*="act=Profile&MID="]');
      if (userLink) {
        querySelectorCache.set(element, { userLink });
        fetchAvatarForUser(userLink, userLink, element);
      }
    }
  }

  function replaceEmojiPostAuthorAvatars(element) {
    if (document.body.matches("#topic")) {
      const userLink = querySelectorCache.get(element)?.userLink || element.querySelector('a[href*="act=Profile&MID="]');
      if (userLink) {
        querySelectorCache.set(element, { userLink });
        fetchAvatarForUser(userLink, userLink, element);
      }
    }
  }

  function replaceBoardStatsAvatars(element) {
    const userLink = querySelectorCache.get(element)?.userLink || element.querySelector('a[href*="act=Profile&MID="]');
    if (userLink && document.body.matches("#board")) {
      querySelectorCache.set(element, { userLink });
      fetchAvatarForUser(userLink, userLink, element);
    }
  }

  function replaceSideStatsAvatars(element) {
    const userLink = querySelectorCache.get(element)?.userLink || element.querySelector('a[href*="act=Profile&MID="]');
    if (userLink && document.body.matches("#blog")) {
      querySelectorCache.set(element, { userLink });
      fetchAvatarForUser(userLink, userLink, element);
    }
  }

  function replaceTagObjectAvatars(element) {
    const userLink = querySelectorCache.get(element)?.userLink || element.querySelector('a[href*="act=Profile&MID="]');
    if (userLink && document.body.matches("#board")) {
      querySelectorCache.set(element, { userLink });
      fetchAvatarForUser(userLink, userLink, element);
    }
  }

  function replaceSummaryListAvatars(element) {
    if (document.body.matches("#send")) {
      const userLink = querySelectorCache.get(element)?.userLink || element.querySelector('a[href*="act=Profile&MID="]');
      if (userLink) {
        querySelectorCache.set(element, { userLink });
        fetchAvatarForUser(userLink, userLink, element);
      }
    }
  }

  function replacePostDetailsAvatars() {
    if (document.body.matches("#topic, #send")) {
      const fragment = document.createDocumentFragment();
      document.querySelectorAll(".post .details").forEach(detailsElement => {
        // Check if an avatar already exists in this .post .details
        if (!detailsElement.querySelector(".avatar")) {
          const nickElement = detailsElement.querySelector(".nick:not(a)");
          if (nickElement && !nickElement.querySelector('a[href*="act=Profile&MID="]')) {
            const name = nickElement.textContent.trim();
            const avatarElement = createAvatarSpan(name);
            fragment.appendChild(avatarElement);
            detailsElement.insertBefore(fragment, detailsElement.firstChild);
          }
        }
      });
    }
  }

  function replaceSendMainBgAvatars() {
    if (document.body.matches("#topic, #send, #blog")) {
      const userLink = querySelectorCache.get(document)?.userLink || document.querySelector('.menuwrap .left .menu:first-child a[href*="act=Profile&MID="]');
      const sendMainBg = querySelectorCache.get(document)?.sendMainBg || document.querySelector('.send .mainbg');
      if (userLink && sendMainBg) {
        querySelectorCache.set(document, { userLink, sendMainBg });
        fetchAvatarForUser(userLink, userLink, sendMainBg);
      }
    }
  }

  function avtObserveNewElements() {
    const avt = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) {
            if (node.matches(".big_list .zz .who") && document.body.matches("#board, #forum, #blog, #search")) {
              replaceBigListAvatars(node);
            } else if (node.matches(".popup.pop_points ol.users li") && document.body.matches("#topic, #search")) {
              replacePopupAvatars(node);
            } else if (node.matches(".st-emoji-epost-author") && document.body.matches("#topic")) {
              replaceEmojiPostAuthorAvatars(node);
            } else if (node.matches(".stats .zz .users li") && document.body.matches("#board")) {
              replaceBoardStatsAvatars(node);
            } else if (node.matches(".side_stats.sidebox .users li") && document.body.matches("#blog")) {
              replaceSideStatsAvatars(node);
            } else if (node.matches("#tagObject li") && document.body.matches("#board")) {
              replaceTagObjectAvatars(node);
            } else if (node.matches(".summary .list li") && document.body.matches("#send")) {
              replaceSummaryListAvatars(node);
            } else if (node.matches(".post .details") && document.body.matches("#topic, #send")) {
              replacePostDetailsAvatars();
            } else {
              if (document.body.matches("#board, #forum, #blog, #search")) {
                node.querySelectorAll(".big_list .zz .who").forEach(replaceBigListAvatars);
              }
              if (document.body.matches("#topic, #search")) {
                node.querySelectorAll(".popup.pop_points ol.users li").forEach(replacePopupAvatars);
              }
              if (document.body.matches("#topic")) {
                node.querySelectorAll(".st-emoji-epost-author").forEach(replaceEmojiPostAuthorAvatars);
              }
              if (document.body.matches("#board")) {
                node.querySelectorAll(".stats .zz .users li").forEach(replaceBoardStatsAvatars);
                node.querySelectorAll("#tagObject li").forEach(replaceTagObjectAvatars);
              }
              if (document.body.matches("#blog")) {
                node.querySelectorAll(".side_stats.sidebox .users li").forEach(replaceSideStatsAvatars);
              }
              if (document.body.matches("#send")) {
                node.querySelectorAll(".summary .list li").forEach(replaceSummaryListAvatars);
              }
              if (document.body.matches("#topic, #send")) {
                node.querySelectorAll(".post .details").forEach(replacePostDetailsAvatars);
              }
            }
          }
        });
      });
    });

    avt.observe(document.body, { childList: true, subtree: true });

    // Process existing elements immediately
    if (document.body.matches("#board, #forum, #blog, #search")) {
      document.querySelectorAll(".big_list .zz .who").forEach(replaceBigListAvatars);
    }
    if (document.body.matches("#topic, #search")) {
      document.querySelectorAll(".popup.pop_points ol.users li").forEach(replacePopupAvatars);
    }
    if (document.body.matches("#topic")) {
      document.querySelectorAll(".st-emoji-epost-author").forEach(replaceEmojiPostAuthorAvatars);
    }
    if (document.body.matches("#board")) {
      document.querySelectorAll(".stats .zz .users li").forEach(replaceBoardStatsAvatars);
      document.querySelectorAll("#tagObject li").forEach(replaceTagObjectAvatars);
    }
    if (document.body.matches("#blog")) {
      document.querySelectorAll(".side_stats.sidebox .users li").forEach(replaceSideStatsAvatars);
    }
    if (document.body.matches("#send")) {
      document.querySelectorAll(".summary .list li").forEach(replaceSummaryListAvatars);
    }
    if (document.body.matches("#topic, #send")) {
      document.querySelectorAll(".post .details").forEach(replacePostDetailsAvatars);
    }

    // Ensure avatars for send .mainbg on initial load
    replaceSendMainBgAvatars();
  }

  avtObserveNewElements();
}();
//Reply counter 
function processPostElements(){const e=document.querySelectorAll(".post"),t=(()=>{const e=new URLSearchParams(window.location.search);return parseInt(e.get("st")||0)+1})();e.forEach(((e,r)=>{createReplyCounter(e,t+r,"after")}))}function createReplyCounter(e,t,r){if(e.querySelector(".reply_counter"))return;const o=document.createElement("b");o.className="reply_counter",o.textContent="#"+t;const s=e.querySelector(".mini_buttons.rt.Sub");s&&("after"===r?s.appendChild(o):s.insertBefore(o,s.firstChild))}processPostElements();const postObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&e.matches(".post")&&processPostElements()}))}))}));postObserver.observe(document.body,{childList:!0,subtree:!0});
//Goto
let timeoutId;function scrollToSmooth(o){window.scrollTo({top:o,behavior:"smooth"})}function showGotoElement(o){o.classList.add("active"),o.style.zIndex="9999"}function hideGotoElement(o){o.classList.remove("active")}function initSmoothScrolling(){document.querySelector(".p_up").addEventListener("click",(()=>{scrollToSmooth(0)})),document.querySelector(".p_down").addEventListener("click",(()=>{scrollToSmooth(document.body.scrollHeight)}));const o=document.querySelector(".goto");window.addEventListener("scroll",(()=>{clearTimeout(timeoutId),showGotoElement(o),timeoutId=setTimeout((()=>{hideGotoElement(o)}),3e3)})),o.addEventListener("mouseenter",(()=>{clearTimeout(timeoutId),showGotoElement(o)})),o.addEventListener("mouseleave",(()=>{timeoutId=setTimeout((()=>{hideGotoElement(o)}),3e3)}))}initSmoothScrolling();const smoothScrollObserver=new MutationObserver((o=>{o.forEach((o=>{o.addedNodes.forEach((o=>{o.nodeType===Node.ELEMENT_NODE&&o.matches(".p_up, .p_down, .goto")&&initSmoothScrolling()}))}))}));smoothScrollObserver.observe(document.body,{childList:!0,subtree:!0});
//Fast send buttons
var e=document.createElement('select');e.title="Insert Font Size tags",e.className="codebuttons",e.setAttribute('onchange',"tag('[size='+this.options[this.selectedIndex].value+']','[/size]'); this.selectedIndex=0");var t=[{value:"0",text:"SIZE"},{value:"2",text:"Very Small"},{value:"3.5",text:"Small"},{value:"5",text:"Regular"},{value:"8",text:"Large"},{value:"12.5",text:"Extra Large"}];t.forEach(function(t){var n=document.createElement('option');n.value=t.value,n.textContent=t.text,e.appendChild(n)});var n=document.querySelector('.fast.send select[title="Insert Font Color tags"]');n&&n.parentNode.insertBefore(e,n);var o=document.querySelector('#send .send select[title="Insert Font Size tags"]');o&&(o.innerHTML='',t.forEach(function(e){var t=document.createElement('option');t.value=e.value,t.textContent=e.text,o.appendChild(t)}));var i=`<button type="button" accesskey="s" title="Insert Strikethrough Text (alt + s)" onclick="tag('<del>','</del>')" class="codebuttons"><del>&nbsp;S&nbsp;</del></button><button type="button" accesskey="a" title="Insert superscript (alt + a)" onclick="tag('<sup>','</sup>')" class="codebuttons">&nbsp;x²<span style="font-size:6px">&nbsp;</span></button><button type="button" accesskey="p" title="Insert subscript (alt + p)" onclick="tag('<sub>','</sub>')" class="codebuttons">&nbsp;x<span style="position:relative;top:0.5em">²</span><span style="font-size:6px">&nbsp;</span></button><button type="button" accesskey="l" title="Create a list (alt + l)" onclick="tag_list()" class="codebuttons"><img src="https://img.forumfree.net/index_file/bb_ol.gif" style="width:22px;height:14px" alt=""></button>`;var c=document.querySelector('.fast.send button[title="Insert Underlined Text (alt + u)"]');c&&c.insertAdjacentHTML('afterend',i);var a=document.createElement('select');a.title="Insert Font Face tags",a.className="codebuttons",a.setAttribute('onchange',"tag('[font='+this.options[this.selectedIndex].value+']','[/font]'); this.selectedIndex=0");var r=[{value:"0",text:"FONT"},{value:"Arial",text:"Arial"},{value:"Times",text:"Times"},{value:"Courier",text:"Courier"},{value:"Impact",text:"Impact"},{value:"Geneva",text:"Geneva"},{value:"Optima",text:"Optima"}];r.forEach(function(e){var t=document.createElement('option');t.value=e.value,t.textContent=e.text,a.appendChild(t)});var l=document.querySelector('.fast.send input[type="button"][accesskey="t"][value="@Tag"]');l&&l.insertAdjacentElement('afterend',a);
//Quote
function isInsideVeContentColor(e){return null!==e.closest(".ve-content.color")}function expandQuotes(e){if(!isInsideVeContentColor(e)&&!e.querySelector(".quotebtn")&&e.scrollHeight>170){e.style.height="170px",e.style.maxHeight="none",e.style.overflow="hidden";const t=document.createElement("div");t.className="quotebtn";const o=document.createElement("button");o.innerHTML="Show More...",o.type="button",t.appendChild(o),e.appendChild(t)}}function modifyQuoteTop(e){if(isInsideVeContentColor(e))return;const t=e.textContent,o=e.querySelector("a");if(t.includes("@")){const n=t.replace(/(.*)\s*\(([^@]+)@[^)]+\)\s*/,"$2 said:");e.innerHTML=n,e.style.color="var(--mdcol)",o&&(e.appendChild(o),o.style.color="var(--mdcol)")}else{const t=e.querySelector(".quote_top b");t&&(t.style.opacity=1)}}function animateHeight(e,t,o){const n=e.clientHeight,c=performance.now();requestAnimationFrame((function animate(i){const r=i-c,u=Math.min(r/o,1);e.style.height=n+(t-n)*u+"px",u<1?requestAnimationFrame(animate):(e.style.height="auto",e.style.overflow="visible")}))}document.body.addEventListener("click",(function(e){if(e.target.matches(".quotebtn button")){const t=e.target.closest(".quote");animateHeight(t,t.scrollHeight,382),setTimeout((function(){e.target.parentElement.remove()}),0)}})),document.querySelectorAll(".color .quote").forEach(expandQuotes),document.querySelectorAll(".color .quote_top").forEach(modifyQuoteTop);const quot=new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){e.nodeType===Node.ELEMENT_NODE&&(e.matches(".quote")&&expandQuotes(e),e.querySelectorAll(".quote").forEach((function(e){e.querySelector(".quotebtn")||expandQuotes(e)})),e.matches(".quote_top")&&modifyQuoteTop(e),e.querySelectorAll(".quote_top").forEach(modifyQuoteTop))}))}))}));quot.observe(document.body,{childList:!0,subtree:!0});
//Youtube lite
function replaceYouTubeIframes(){const e=document.querySelectorAll('.post .color iframe');e.forEach(e=>{const t=e.src;if(t&&t.includes('youtube.com/embed/')){const n=t.split('/embed/')[1].split('?')[0];e.setAttribute('data-lite-src',t),e.removeAttribute('src');const o=document.createElement('lite-youtube');o.setAttribute('videoid',n),e.replaceWith(o)}})}replaceYouTubeIframes();
//Skin
const root=document.documentElement,button=document.getElementById("theme-toggle-button");button.addEventListener("click",(()=>{"second"===root.getAttribute("data-theme")?(root.removeAttribute("data-theme"),localStorage.removeItem(storageKey)):(root.setAttribute("data-theme","second"),localStorage.setItem(storageKey,"second"))}));
//Image generator 
function createCustomDialog(){const e=document.querySelector(".imgen-backdrop"),t=document.querySelector(".imgen"),n=document.querySelector(".imgen-alert");if(t){t.style.display="block",e.style.display="block",n.style.display="none";const a=t.querySelector("input");a&&a.focus()}else{const t=document.createElement("div");t.className="imgen",t.style.zIndex=9999;const n=document.createElement("div");n.className="imgen-backdrop",n.addEventListener("click",()=>{t.style.display="none",n.style.display="none",document.querySelector(".imgen-alert").style.display="none",document.querySelector(".imgen input").value=""});const a=document.createElement("div");a.className="header",a.innerHTML='<i class="fa-regular fa-image"></i> Generate Image Thumbnail';t.appendChild(a);const l=document.createElement("div");l.className="imgen-alert",l.innerHTML='<i class="fa-regular fa-circle-exclamation"></i> Please enter a valid URL',t.appendChild(l),l.style.display="none";const c=document.createElement("input");c.type="text",c.placeholder="Insert image link...",c.setAttribute("aria-label","Image URL"),t.appendChild(c);const i=document.createElement("button");i.className="codebuttons",i.textContent="INSERT",i.addEventListener("click",()=>{const e=c.value;validateImageURL(e,(i=>{i?(tag('<img src="'+e+'">',""),triggerInputEvent(),t.style.display="none",n.style.display="none",c.value=""):l.style.display="block"}))}),t.appendChild(i),i.setAttribute("aria-label","Insert"),c.addEventListener("click",()=>{c.select()}),document.body.appendChild(n),document.body.appendChild(t),t.style.display="block",c.focus()}}function triggerInputEvent(){const e=document.querySelector("textarea#Post");if(e){const t=new Event("input",{bubbles:!0,cancelable:!0});e.dispatchEvent(t)}}function validateImageURL(e,t){const n=new Image;n.src=e,n.onload=()=>t(!0),n.onerror=()=>t(!1)}function tag_image(){createCustomDialog()}if(!document.URL.includes("?act=Post")&&!document.URL.includes("?t=")){const e=document.querySelector('.codebuttons[value*="IMG"]');e&&e.addEventListener("click",tag_image)}
//Link generator
let linkgenInput;function createCustomLinkDialog(){const e=document.querySelector(".linkgen"),n=document.querySelector(".linkgen-backdrop"),t=document.querySelector(".linkgen-alert");if(e)e.style.display="block",n.style.display="block",t.style.display="none",linkgenInput.value="",linkgenInput.focus();else{const e=document.createElement("div");e.className="linkgen",e.style.zIndex=9999;const n=document.createElement("div");n.className="header",n.innerHTML='<i class="fa-regular fa-link"></i> Generate Link',e.appendChild(n);const t=document.createElement("div");t.className="linkgen-alert",t.innerHTML='<i class="fa-regular fa-circle-exclamation"></i> Please enter a valid URL',t.style.display="none";const l=document.createElement("div");l.className="linkgen-backdrop",l.addEventListener("click",(function(){e.style.display="none",l.style.display="none",linkgenInput.value="",a.value="",t.style.display="none"})),linkgenInput=document.createElement("input"),linkgenInput.type="text",linkgenInput.placeholder="Insert link...",linkgenInput.setAttribute("aria-label","URL"),linkgenInput.addEventListener("click",(function(){linkgenInput.value&&linkgenInput.select()}));const a=document.createElement("input");a.type="text",a.placeholder="Custom text...",a.setAttribute("aria-label","Custom Text");const i=document.createElement("button");i.className="codebuttons",i.textContent="INSERT",i.addEventListener("click",(function(){const n=linkgenInput.value,i=a.value;if(isValidURL(n)&&!containsHTMLorBBCode(n)){let t="";t=i?'<a target="_blank" href="'+n+'">'+i+"</a>":'<a target="_blank" href="'+n+'">'+n+"</a>",tag(t,""),triggerInputEvent(),e.style.display="none",l.style.display="none",linkgenInput.value="",a.value=""}else t.style.display="block"})),e.appendChild(t),e.appendChild(linkgenInput),e.appendChild(a),e.appendChild(i),document.body.appendChild(e),document.body.appendChild(l),e.style.display="block",linkgenInput.focus()}}function triggerInputEvent(){const e=document.querySelector("textarea#Post");if(e){const n=new Event("input",{bubbles:!0,cancelable:!0});e.dispatchEvent(n)}}function isValidURL(e){return/^https?:\/\/|^ftp:\/\//.test(e)}function containsHTMLorBBCode(e){return/<[^>]+>|\[.*?\]/.test(e)}const urlButton=document.querySelector('input[accesskey="w"]');urlButton&&(urlButton.removeAttribute("onclick"),urlButton.addEventListener("click",(function(){createCustomLinkDialog()})));
//Loading icon
function replaceElements(){document.querySelectorAll(".emoji_loading").forEach((e=>{"&nbsp;"===e.innerHTML.trim()&&(e.innerHTML='<i class="fa-regular fa-loader fa-spin"></i>')})),document.querySelectorAll("img").forEach((e=>{if("https://img.forumfree.net/index_file/loads3.gif"===e.src){const t=document.createElement("i");t.className="fa-regular fa-loader fa-spin",e.replaceWith(t)}})),document.querySelectorAll(".st-emoji-spinner-border").forEach((e=>{const t=document.createElement("i");t.className="fa-regular fa-loader fa-spin",e.replaceWith(t)}));const e=document.querySelector("#notifications-more");if(e&&!e.querySelector(".fa-spin")){const t=document.createElement("i");t.className="fa-regular fa-loader fa-spin",e.appendChild(t)}const t=document.querySelector("#popupmod");if(t){const e=t.querySelector("#Cronmod");if(e){const t=e.querySelector('img[src="https://img.forumfree.net/index_file/load.gif"]');if(t){const e=document.createElement("i");e.className="fa-regular fa-loader fa-spin",t.replaceWith(e)}}}}function waitForElement(e,t){const r=new MutationObserver((o=>{for(const n of o)if("childList"===n.type&&document.querySelector(e)){r.disconnect(),t(document.querySelector(e));break}})),o=document.body;r.observe(o,{childList:!0,subtree:!0});const n=document.querySelector(e);n&&(r.disconnect(),t(n))}replaceElements();const dynamicLoadingObserver=new MutationObserver((e=>{let t=!1;e.forEach((e=>{"childList"===e.type&&e.addedNodes.length&&(t=!0)})),t&&replaceElements()}));dynamicLoadingObserver.observe(document.body,{childList:!0,subtree:!0});
//Preview 
function handleLoadingElement(){document.querySelectorAll(".send").forEach((e=>{var n=e.querySelectorAll("ul li.Item");if(n.length>=2){var t=document.getElementById("loading");t&&n[1].appendChild(t)}}))}const preview=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.length>0&&e.target.querySelector(".send")&&handleLoadingElement()}))}));preview.observe(document.body,{childList:!0,subtree:!0}),handleLoadingElement();
//Attachment
const fileInput=document.querySelector('body#send #attach input[name="FILE_UPLOAD"]');if(fileInput){const e=document.createElement("div");e.id="attachments-preview",e.style.marginTop="12px",e.style.textAlign="center",e.style.display="flex",fileInput.closest("td").appendChild(e),fileInput.addEventListener("change",(()=>{e.innerHTML="";const t=fileInput.files;if(t&&t.length>0)Array.from(t).forEach((t=>{if(t.type.startsWith("image/")){const n=new FileReader;n.onload=n=>{const l=document.createElement("img");l.src=n.target.result,l.alt=t.name,l.style.maxWidth="100px",l.style.maxHeight="100px",l.style.borderRadius="4px",l.title=t.name,e.appendChild(l)},n.readAsDataURL(t)}else{const n=document.createElement("i");n.className="fa-regular fa-file-zipper",n.style.fontSize="66px",n.style.color="var(--mdcol)",n.style.margin="10px";const l=document.createElement("p");l.textContent=t.name,l.style.fontSize=".875rem",l.style.margin="0";const a=document.createElement("div");a.style.display="inline-block",a.style.textAlign="center",a.style.margin="0",a.appendChild(n),a.appendChild(l),e.appendChild(a)}}));else{const t=document.createElement("p");t.textContent="No file selected.",e.appendChild(t)}}))}
//HTML colors
var colors=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","BlanchedAlmond","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkCyan","DarkGoldenRod","DarkGray","DarkKhaki","Darkorange","DarkSalmon","DarkSeaGreen","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","GreenYellow","HoneyDew","HotPink","IndianRed","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","MediumAquaMarine","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MintCream","MistyRose","Moccasin","NavajoWhite","OldLace","Olive","OliveDrab","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","RosyBrown","RoyalBlue","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","WhiteSmoke","YellowGreen"];document.querySelectorAll('.send select[title="Insert Font Color tags"]').forEach((function(e){colors.forEach((function(l){var o=document.createElement("option");o.text=l,o.value=l,o.style.color=l,e.add(o)}))}));var selectElement=document.querySelector(".tag select.codebuttons");selectElement&&colors.forEach((function(e){var l=document.createElement("option");l.text=e,l.value=e,l.style.color=e,selectElement.add(l)})); 
//Timeago 
$(document).ready(function() {
    // Remove the inner <span> (e.g., "Posted on") in .post .when elements
    $('.post .when span,.summary .when span').each(function() {
        $(this).remove();  // Remove the inner span
    });

    // Select all the '.post .when' elements
    $('.post .when, .big_list .when,.summary .when').each(function() {
        var dateText = $(this).text().trim();  // Get the text content and trim extra spaces
        var formattedDate;

        // Check if the date follows US format (MM/DD/YYYY, HH:MM AM/PM)
        var usDatePattern = /(\d{1,2})\/(\d{1,2})\/(\d{4}),\s*(\d{1,2}):(\d{2})\s*(AM|PM)/;

        // Check for European format (DD/MM/YYYY, HH:MM)
        var europeanDatePattern = /(\d{1,2})\/(\d{1,2})\/(\d{4}),\s*(\d{2}):(\d{2})/;

        // Check for YYYY/MM/DD HH:MM format (e.g., 2025/01/25 20:50)
        var customDatePattern = /(\d{4})\/(\d{1,2})\/(\d{1,2})\s*(\d{2}):(\d{2})/;

        // Check for ISO format (YYYY-MM-DDTHH:mm:ss)
        var isoDatePattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;

        // Check for RFC 2822 format (e.g., Fri, 25 Jan 2025 14:30:00 +0000)
        var rfc2822DatePattern = /([A-Za-z]+),\s*(\d{1,2})\s([A-Za-z]+)\s(\d{4})\s(\d{2}):(\d{2}):(\d{2})\s([+\-]\d{4})/;

        // Check for Hebrew format (e.g., 25 Tevet 5785)
        var hebrewDatePattern = /(\d{1,2})\s([A-Za-z]+)\s(\d{4})/;

        // Check for Japan/Chinese format (e.g., 2025年01月25日)
        var japanChineseDatePattern = /(\d{4})年(\d{2})月(\d{2})日/;

        // Check for Cyrillic month names (e.g., 25 Января 2025)
        var cyrillicMonthDatePattern = /(\d{1,2})\s([А-Яа-я]+)\s(\d{4})/;

        // Check for Spanish month names (e.g., 25 enero 2025)
        var spanishMonthDatePattern = /(\d{1,2})\s([a-zA-Z]+)\s(\d{4})/;

        // Check for Russian short format (DD-МММ-YY HH:MM)
        var russianShortPattern = /(\d{1,2})-(\p{L}{3})-(\d{2})\s*(\d{2}):(\d{2})/u;

        // Handle US format
        if (usDatePattern.test(dateText)) {
            var match = usDatePattern.exec(dateText);
            var month = match[1];
            var day = match[2];
            var year = match[3];
            var hour = match[4];
            var minute = match[5];
            var ampm = match[6];
            if (ampm === 'PM' && hour < 12) {
                hour = parseInt(hour) + 12;
            } else if (ampm === 'AM' && hour === '12') {
                hour = 0;
            }
            formattedDate = year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00';
        }
        // Handle European format
        else if (europeanDatePattern.test(dateText)) {
            var match = europeanDatePattern.exec(dateText);
            var day = match[1];
            var month = match[2];
            var year = match[3];
            var hour = match[4];
            var minute = match[5];
            formattedDate = year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00';
        }
        // Handle custom format
        else if (customDatePattern.test(dateText)) {
            var match = customDatePattern.exec(dateText);
            var year = match[1];
            var month = match[2];
            var day = match[3];
            var hour = match[4];
            var minute = match[5];
            formattedDate = year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00';
        }
        // Handle ISO format
        else if (isoDatePattern.test(dateText)) {
            var match = isoDatePattern.exec(dateText);
            formattedDate = dateText;  // It's already in ISO format
        }
        // Handle RFC 2822 format
        else if (rfc2822DatePattern.test(dateText)) {
            var match = rfc2822DatePattern.exec(dateText);
            var day = match[2];
            var month = match[3];
            var year = match[4];
            var hour = match[5];
            var minute = match[6];
            var second = match[7];
            formattedDate = year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + ':00';
        }
        // Handle Hebrew format
        else if (hebrewDatePattern.test(dateText)) {
            var match = hebrewDatePattern.exec(dateText);
            var day = match[1];
            var month = match[2];
            var year = match[3];
            formattedDate = year + '-' + month + '-' + day + 'T00:00:00';
        }
        // Handle Japan/Chinese format
        else if (japanChineseDatePattern.test(dateText)) {
            var match = japanChineseDatePattern.exec(dateText);
            var year = match[1];
            var month = match[2];
            var day = match[3];
            formattedDate = year + '-' + month + '-' + day + 'T00:00:00';
        }
        // Handle Cyrillic month format (Russian/Arabic)
        else if (cyrillicMonthDatePattern.test(dateText)) {
            var match = cyrillicMonthDatePattern.exec(dateText);
            var day = match[1];
            var month = match[2];
            var year = match[3];
            formattedDate = year + '-' + month + '-' + day + 'T00:00:00';
        }
        // Handle Spanish month format (Latin America)
        else if (spanishMonthDatePattern.test(dateText)) {
            var match = spanishMonthDatePattern.exec(dateText);
            var day = match[1];
            var month = match[2];
            var year = match[3];
            // Convert the month name to lowercase and capitalize it for consistency
            var monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
            var monthIndex = monthNames.indexOf(month.toLowerCase());
            month = (monthIndex + 1).toString().padStart(2, '0');  // Convert to two-digit format
            formattedDate = year + '-' + month + '-' + day + 'T00:00:00';
        }
        // Handle Russian short format
        else if (russianShortPattern.test(dateText)) {
            var match = russianShortPattern.exec(dateText);
            var day = match[1];
            var month = match[2];
            var year = match[3];
            var hour = match[4];
            var minute = match[5];

            // Russian month names mapping
            var russianMonths = {
                'Янв': '01',
                'Фев': '02',
                'Мар': '03',
                'Апр': '04',
                'Май': '05',
                'Июн': '06',
                'Июл': '07',
                'Авг': '08',
                'Сен': '09',
                'Окт': '10',
                'Ноя': '11',
                'Дек': '12'
            };

            var numericMonth = russianMonths[month] || '01';  // Default to January if not found
            year = '20' + year;  // Convert to full year
            formattedDate = year + '-' + numericMonth + '-' + day + 'T' + hour + ':' + minute + ':00';
        }

        // Only update the element if a valid date format is found
        if (formattedDate) {
            var timeElement = $('<time>').attr('datetime', formattedDate).text(dateText);
            $(this).html(timeElement);
        }
    });

    // Initialize timeago on elements with the datetime attribute
    $('time').timeago();
});
//Tooltips 
function waitForElement(t,e,i=1e4){const o=Date.now(),checkForElement=()=>{const n=document.querySelectorAll(t);n.length>0?n.forEach(e):Date.now()-o<i?requestAnimationFrame(checkForElement):console.warn('Element with selector "'+t+'" did not appear within '+i+"ms.")};checkForElement()}function initTippy(t){t._tippy||tippy(t,{placement:"bottom",theme:"dark",animation:"fade",offset:[0,10],observe:!0,arrow:!1,onCreate(t){t.popper.classList.add("tippy-custom")}})}function addTooltip(t){waitForElement(t,(t=>{if(!t.hasAttribute("data-tippy-content")&&t.getAttribute("title")){const e=t.getAttribute("title");t.setAttribute("data-tippy-content",e),t.removeAttribute("title")}initTippy(t)}))}const tooltipObserver=new MutationObserver((t=>{t.forEach((t=>{t.addedNodes.forEach((t=>{t.nodeType===Node.ELEMENT_NODE&&t.hasAttribute("data-tippy-content")&&initTippy(t)}))}))}));function isMobileDevice(){return window.matchMedia("(max-width: 768px)").matches}isMobileDevice()||(tooltipObserver.observe(document.body,{childList:!0,subtree:!0}),waitForElement("body",(()=>{addTooltip(".st-editor-toggle"),addTooltip('button[name="full"]'),addTooltip("#preview_button"),waitForElement('.top-button .topbutton input[type="submit"]',(t=>{const e=t.closest("form").querySelector('input[type="submit"]').value,i=t.closest(".top-button");i.setAttribute("data-tippy-content",e),initTippy(i)})),waitForElement("#mark-send button",(t=>{t.setAttribute("data-tippy-content","Find"),initTippy(t)})),waitForElement('.menuwrap a[href="#notifications"]',(t=>{t.setAttribute("data-tippy-content","Notifications"),initTippy(t)})),waitForElement(".menuwrap a.st-emoji-link-void.st-emoji-notice-modal-toggle",(t=>{t.setAttribute("data-tippy-content","Reactions"),initTippy(t)})),waitForElement(".navsub .lastpost a",(t=>{t.setAttribute("data-tippy-content","Go to first unread post"),initTippy(t)})),waitForElement(".navsub .last a",(t=>{t.setAttribute("data-tippy-content","Go to last page"),initTippy(t)})),waitForElement(".navsub .first a",(t=>{t.setAttribute("data-tippy-content","Go to first page"),initTippy(t)})),waitForElement('.big_list .zz input[type="checkbox"]',(t=>{t.setAttribute("data-tippy-content","Select topic"),initTippy(t)})),waitForElement('#send .send .darkbar button[name="preview"]',(t=>{t.setAttribute("data-tippy-content","Preview"),initTippy(t)})),waitForElement(".menuwrap .log",(t=>{t.setAttribute("data-tippy-content","Log in"),initTippy(t)})),waitForElement('.tag img[alt="x"]',(t=>{t.setAttribute("data-tippy-content","Delete"),t.removeAttribute("title"),initTippy(t)})),addTooltip('.menuwrap a[href="#notifications"]'),addTooltip(".menuwrap a.st-emoji-link-void.st-emoji-notice-modal-toggle"),addTooltip(".menuwrap .log"),addTooltip('#send .send .darkbar button[name="preview"]'),addTooltip(".navsub .lastpost a"),addTooltip(".navsub .last a"),addTooltip(".navsub .first a"),addTooltip('.big_list .zz input[type="checkbox"]'),addTooltip('#send .send .right.Sub img[alt="File Attachments"]'),addTooltip('.tag img[alt="x"]'),addTooltip('.post .title2.bottom .right.Item.Justify .rt.Sub input[type="checkbox"],.post .title2.bottom .right.Item.Justify .rt.Sub label'),addTooltip('#send .send button[name="preview"]'),addTooltip(".post .title2.top .right img.bullet_delete"),addTooltip('#send .send .right.Sub img[data-emojipicker="#Post"]');document.querySelectorAll("[data-tippy-content]").forEach((t=>{initTippy(t)}))})));
//User tooltips
async function fetchUserDetails(e){try{const t=await fetch(e);if(!t.ok)throw new Error("Failed to fetch "+e);const o=await t.arrayBuffer(),a=new TextDecoder("windows-1252").decode(o),r=(new DOMParser).parseFromString(a,"text/html"),i=r.querySelector(".profile span.avatar")?r.querySelector(".profile span.avatar").innerHTML:"",l=r.querySelector(".profile span.nick")?r.querySelector(".profile span.nick").textContent:"Unknown User",s=r.querySelector(".profile-group dd.Sub.Item")?.textContent.trim()||"",n=r.querySelector(".profile-title dd.Sub.Item")?.textContent.trim()||"",p=r.querySelector(".profile-location dd.Sub.Item")?.textContent.trim()||"";function cleanNumberText(e){return e.replace(/^\+/,"").replace(/\s*\(.*?\)/g,"").trim()}function cleanDateText(e){return e.split(",")[0].trim()}const c=r.querySelector(".profile-joined")?{label:r.querySelector(".profile-joined dt")?.textContent.trim()||"Joined",value:cleanDateText(r.querySelector(".profile-joined dd")?.textContent||"")}:null,d=r.querySelector(".profile-posts")?{label:r.querySelector(".profile-posts dt")?.textContent.trim()||"Posts",value:cleanNumberText(r.querySelector(".profile-posts dd")?.textContent||"")}:null,u=r.querySelector(".profile-rep.u_reputation")?{label:r.querySelector(".profile-rep.u_reputation dt")?.textContent.trim()||"Reputation",value:cleanNumberText(r.querySelector(".profile-rep.u_reputation dd")?.textContent||"")}:null;return{avatar:i,nick:l,group:s,title:n,loc:p,joined:c,posts:d,rep:u,lastAction:r.querySelector(".profile-lastaction")?{label:r.querySelector(".profile-lastaction dt")?.textContent.trim()||"Last Action",value:cleanDateText(r.querySelector(".profile-lastaction dd")?.textContent||"")}:null}}catch(v){return console.error("Error fetching user details: "+v),null}}function initUserTooltips(){document.querySelectorAll(".post .nick a, .post .avatar, .big_list .who a, .big_list .avatar, .tag .nickname, .side_topics .who a, .lastarticles .topic > span a").forEach((function(e){tippy(e,{allowHTML:!0,placement:"bottom",theme:"dark",animation:"fade",offset:[0,10],arrow:!1,onShow:function(t){e.dataset.tooltipLoaded||(t.popper.classList.add("hidden"),fetchUserDetails(e.href).then((function(o){if(!o)return t.setContent('<div class="tooltip-error">Error loading user info</div>'),e.dataset.tooltipLoaded="true",t.popper.classList.remove("tippy-profile"),t.popper.classList.remove("hidden"),void t.popper.classList.add("tippy-profile-error");let a="",r="";o.group.toLowerCase().includes("global moderator")?(a="global-moderator",r="global-moderator"):o.group.toLowerCase().includes("administrator")?(a="administrator",r="administrator"):o.group.toLowerCase().includes("moderator")?(a="moderator",r="moderator"):o.group.toLowerCase().includes("game dev")?(a="game-dev",r="game-dev"):(a="utente",r="utente");const i='<div class="tooltip-user-details"><div class="tippy-details"><div class="tooltip-avatar">'+o.avatar+'</div><div class="tippy-info"><div class="tippy-nick '+r+'">'+o.nick+"</div>"+(o.group?'<div class="tippy-group '+a+'">'+o.group+"</div>":"")+(o.title?'<div class="tippy-title">'+o.title+"</div>":"")+(o.loc?'<div class="tippy-location">'+o.loc+"</div>":"")+'</div></div><div class="tippy-score">'+(o.posts?'<div class="tippy-posts"><span class="tippy-posts-label">'+o.posts.label+'</span><span class="tippy-posts-value">'+o.posts.value+"</span></div>":"")+(o.rep?'<div class="tippy-rep"><span class="tippy-rep-label">'+o.rep.label+'</span><span class="tippy-rep-value">'+o.rep.value+"</span></div>":"")+(o.joined?'<div class="tippy-joined"><span class="tippy-joined-label">'+o.joined.label+'</span><span class="tippy-joined-value">'+o.joined.value+"</span></div>":"")+(o.lastAction?'<div class="tippy-last-action"><span class="tippy-last-action-label">'+o.lastAction.label+'</span><span class="tippy-last-action-value">'+o.lastAction.value+"</span></div>":"")+"</div></div>";t.setContent(i),e.dataset.tooltipLoaded="true",t.popper.classList.remove("hidden")})))},onCreate:function(e){e.popper.classList.add("tippy-profile","hidden")}})}))}initUserTooltips();
