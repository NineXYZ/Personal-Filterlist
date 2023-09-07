// Custom Scriptlets for uBlock
"use strict";

/***********************/
/* MrBukLau's Scriptlets */
/***********************/
// Credit: MrBukLau (https://github.com/MrBukLau)

/// bypass-streaming-url-shortener.js
/// alias bsus.js
(function() {
    window.addEventListener("DOMContentLoaded", function() {
        document.querySelector("a[id^='newskip-btn-']").click();
    });
})();

/// get-url-parameter.js
/// alias gup.js
(function() {
    if (window.location.href.includes("?url=") || window.location.href.includes("&url=")) {
        let urlParams = new URLSearchParams(window.location.search);
        let urlReplacement = urlParams.get("url");
        if (window.location.href.match("url=http")) {
            window.location.replace(urlReplacement);
        } else {
            window.location.replace("https://" + urlReplacement);
        }
    }
})();

/***********************/
/* Specific Scriptlets */
/***********************/
/// amazon-url-cleaner.js
/// alias auc.js
(function() {
    window.addEventListener("load", function() {
        let asin = document.getElementById("ASIN");
        if (asin) {
            let url = document.location.protocol + "//" + document.location.host + "/dp/" + asin.value + "/";
            if (url === document.location.href) {
                return;
            }
            window.history.replaceState(null, null, url);
        }
    });
})();

/// apple-music-artwork-format-and-size-changer.js
/// alias amafasc.js
(function() {
    if (window.location.href.includes(".mzstatic.com/image/thumb/")) {
        if (window.location.href.match("190x190") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("190x190", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("200x200") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("200x200", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("270x270") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("270x270", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("296x296") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("296x296", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("300x300") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("300x300", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("305x305") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("305x305", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("316x316") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("316x316", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("380x380") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("380x380", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("400x400") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("400x400", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("500x500") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("500x500", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("540x540") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("540x540", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("592x592") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("592x592", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("600x600") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("600x600", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("610x610") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("610x610", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("632x632") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("632x632", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("1000x1000") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("1000x1000", "2000x2000").replace(".webp", ".jpeg"));
        }
    }
})();

/// apple-music-japanese-to-english-album-translator.js
/// alias amjteat.js
(function() {
    if (window.location.href.includes("/music.apple.com/jp/album/")) {
        let oldUrlSearch = window.location.search;
        let urlParams = new URLSearchParams(oldUrlSearch);
        if (urlParams.has("l") === false) {
            if (oldUrlSearch.indexOf("?") === -1) {
                if (!/\?l=en/.test(oldUrlSearch)) {
                    window.location.replace(window.location.protocol + "//" + window.location.host + window.location.pathname + oldUrlSearch + "?l=en" + window.location.hash);
                }
            } else {
                if (!/\&l=en/.test(oldUrlSearch)) {
                    window.location.replace(window.location.protocol + "//" + window.location.host + window.location.pathname + oldUrlSearch + "&l=en" + window.location.hash);
                }
            }
        }
    }
})();

/// github-gist-target-attribute-setter.js
/// alias ggtas.js
(function() {
    window.addEventListener("load", function() {
        document.querySelectorAll("article[itemprop='text'] > p[dir='auto'] > a[href^='http']").forEach(function(a) {
            a.setAttribute("target", "_blank");
        });
        document.querySelectorAll("article[itemprop='text'] > ul[dir='auto'] > li > a[href^='http']").forEach(function(b) {
            b.setAttribute("target", "_blank");
        });
    });
})();

/// hikarinoakariost-bypasser.js
/// alias hnab.js
(function() {
    if (window.location.href.includes("/hikarinoakari.com/out/")) {
        setTimeout(function() {
            document.querySelector("a[class='link']").click();
        }, 750);
    }
})();

/// nyaa-dark-mode-enabler.js
/// alias ndme.js
(function() {
    window.addEventListener("DOMContentLoaded", function() {
        if (!document.body.classList.contains("dark")) {
            document.querySelector("a[id='themeToggle']").click();
        }
    });
})();

/// old-reddit-redirector.js
/// alias orr.js
(function() {
    if (window.location.href.includes("/www.reddit.com/") && !window.location.href.includes("/www.reddit.com/gallery/") && !window.location.href.includes("/www.reddit.com/poll/")) {
        window.location.replace(window.location.toString().replace("/www.reddit.com/", "/old.reddit.com/"));
    }
})();

/// ouo-io-bypasser.js
/// alias oib.js
(function() {
    window.addEventListener("load", function() {
        if (document.getElementById("form-captcha") === null) {
            document.getElementsByTagName("form")[0].submit();
        }
        if (document.getElementById("form-captcha").click) {
            document.getElementsByTagName("form")[0].submit();
        }
    });
})();

/// rentry-target-attribute-setter.js
/// alias rtas.js
(function() {
    window.addEventListener("load", function() {
        document.querySelectorAll("a[href^='http']").forEach(function(a) {
            a.setAttribute("target", "_blank");
        });
    });
})();

/// youtube-shorts-redirector.js
/// alias ysr.js
(function() {
    let oldHref = document.location.href;
    if (window.location.href.indexOf("youtube.com/shorts") > -1) {
        window.location.replace(window.location.toString().replace("/shorts/", "/watch?v="));
    }
    window.onload = function() {
        let bodyList = document.querySelector("body");
        let observer = new MutationObserver(function(mutations) {
            mutations.forEach(function() {
                if (oldHref !== document.location.href) {
                    oldHref = document.location.href;
                    if (window.location.href.indexOf("youtube.com/shorts") > -1) {
                        window.location.replace(window.location.toString().replace("/shorts/", "/watch?v="));
                    }
                }
            });
        });
        let config = {
            childList: true,
            subtree: true
        };
        observer.observe(bodyList, config);
    };
})();

/***********************/
/* Custom Scriptlets */
/***********************/

/// aniwave-strict-cleaner.js
/// alias aniscl.js
(function() {
    // Reference to the original console.log
    var originalLog = console.log;

    // Debugging section
    function debugLog(message) {
        originalLog("[DEBUG] " + message);
    }
    
    debugLog("Scriptlet started execution.");

    // Function to remove elements based on a selector
    function removeElements(selector) {
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
        }
        debugLog("Attempted to remove elements with selector: " + selector);
    }

    // Overriding specific functions to noop (no-operation)
    var noopFunc = function() {};
    console = {log: noopFunc, error: noopFunc, warn: noopFunc};
    window._0x1571b1 = noopFunc;
    debugLog("Overrode console methods and window._0x1571b1 to noop.");

    // Function to handle the main logic
    function handleMainLogic() {
        debugLog("Handling main logic after DOMContentLoaded.");

        // Blocking or removing specific scripts and elements
        var blockedScripts = [
            'sharethis.com',
            'coldvain.com',
            'www.google.com/recaptcha/api.js',
            'platform-api.sharethis.com',
            'whos.amung.us'
        ];

        blockedScripts.forEach(function(src) {
            removeElements('script[src*="' + src + '"]');
        });

        // Removing specific elements based on other attributes
        var otherElements = [
            'a[href="https://fmovies.to"]',
            'a[href="https://mangafire.to/"]',
            'a[href="https://zorohd.to/"]',
            "meta[http-equiv='origin-trial']"
        ];

        otherElements.forEach(function(selector) {
            removeElements(selector);
        });

        // MutationObserver to watch for DOM changes and remove any newly added unwanted elements/scripts
        var observer = new MutationObserver(function(mutations) {
            blockedScripts.concat(otherElements).forEach(function(selector) {
                removeElements(selector);
            });
            debugLog("MutationObserver triggered. Checked for unwanted elements/scripts.");
        });
        
        observer.observe(document, {subtree: true, childList: true});
        debugLog("Initialized MutationObserver.");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", handleMainLogic);
    } else {
        handleMainLogic();
    }

    // Optional: Overriding Constructors (Aggressive and might break the website)
    window.HTMLScriptElement = noopFunc;
    debugLog("Overrode window.HTMLScriptElement to noop.");
})();
