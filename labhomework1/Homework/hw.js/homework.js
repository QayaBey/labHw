let dom = {
    createElement: function (tagName, className, cssProps, location) {
        let element = document.createElement(tagName);
        if (element != null) {
            if (this._isValidValue(className)) {
                element.className = className;
            }
            for (let f in cssProps) {
                console.log(f);
                if (this._isValidAttr(f)) {
                    element[f] = cssProps[f];
                }
                else {
                    element.style[f] = cssProps[f];
                }
            }
            if (location == "body") {
                document.body.appendChild(element);
            } else {
                location.appendChild(element);
            }
        }
        return element;
    },
    _isValidValue: function (val) {
        return (typeof (val) !== "undefined" && val)
    },
    _isValidAttr: function (attr) {
        return (attr == 'src' || attr == 'href' || attr == 'innerText' || attr == 'id');
    }
}
 let head = dom.createElement('header', "header-top", null, "body");
 let div=dom.createElement('div', null, null, head);
 let h1=dom.createElement('h1', null, {"innerText":"My Website"}, div);
 let p=dom.createElement('p', "pt-3 bolder", {"innerText":"A"}, div);
 let cent=dom.createElement('span', "befor", {"innerText":"website created by me."}, p);
 let div2 = dom.createElement('div', "nav_bar", null, "body");
 let a1=dom.createElement('a', "activee", {"innerText":"Home","href":"#"}, div2);
 let a2=dom.createElement('a', "hoverr", {"innerText":"Link", "href":"#"}, div2);
 let a3=dom.createElement('a', "hoverr", {"innerText":"Link", "href":"#"}, div2);
 let a4=dom.createElement('a', "right hoverr", {"innerText":"Link","href":"#"}, div2);
 let div3=dom.createElement('div',"container-fluid pb-3", null, "body");
 let div4=dom.createElement('div',"row", null, div3);
 let div5=dom.createElement('div',"col-md-4 col-lg-4 aside", null, div4);
 let h2=dom.createElement('h2',"pt-5 pb-3", {"innerText":"About Me"}, div5);
 let h5=dom.createElement('h5',"pb-3", {"innerText":"Photo of me:"}, div5);
 let div6=dom.createElement('div',"image_top",{"innerText":"Image"}, div5);
 let p2=dom.createElement('p',"pt-3", {"innerText":"Some text about me in culpa qui officia deserunt mollit anim.."}, div5);
 let h3=dom.createElement('h3',null, {"innerText":"More Text"}, div5);
 let p3=dom.createElement('p',null, {"innerText":"Lorem ipsum dolor sit ame."}, div5);
 let div7=dom.createElement('div',"image_bot mb-3",{"innerText":"Image"}, div5);
 let div8=dom.createElement('div',"image_bot mb-3",{"innerText":"Image"}, div5);
 let div9=dom.createElement('div',"image_bot",{"innerText":"Image"}, div5);

 let div10=dom.createElement('div',"col-md-8 col-lg-8 main", null, div4);
 let h22=dom.createElement('h2',"pt-5 pb-3", {"innerText":"TITLE HEADING"}, div10);
 let h52=dom.createElement('h5',"pb-3", {"innerText":"Title description, Dec 7, 2017"}, div10);
 let div11=dom.createElement('div',"image_top",{"innerText":"Image"}, div10);
 let p4=dom.createElement('p',"pt-3", {"innerText":"Some text.."}, div10);
 let p5=dom.createElement('p',null, {"innerText":"Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}, div10);
 let h23=dom.createElement('h2',"pt-4 pb-3", {"innerText":"TITLE HEADING"}, div10);
 let h53=dom.createElement('h5',"pb-3", {"innerText":"Title description, Dec 7, 2017"}, div10);
 let div12=dom.createElement('div',"image_top",{"innerText":"Image"}, div10);
 let p7=dom.createElement('p',"pt-3", {"innerText":"Some text.."}, div10);
 let p6=dom.createElement('p',null, {"innerText":"Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}, div10);

 let foot =dom.createElement('footer', null, null, "body");
 let h6=dom.createElement('h6', null, {"innerText":"Footer"}, foot);









