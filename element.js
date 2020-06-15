const element = new function element() {
	this.create = function create(array_of_setting={'el':'div',
													'html':'',
													'attrs':{
														'id':'',
														'class':'',
														'accesskey':'',
														'contenteditable':'',
														'contextmenu':'',
														'dir':'',
														'hidden':'',
														'lang':'',
														'spellcheck':'',
														'style':'',
														'tabindex':'',
														'title':'',
														'download':'',
														'href':'',
														'hreflang':'',
														'name':'',
														'rel':'',
														'rev':'',
														'shape':'',
														'target':'',
														'type':'',
														'align':'',
														'alt':'',
														'archive':'',
														'code':'',
														'codebase':'',
														'height':'',
														'vspace':'',
														'width':'',
														'coords':'',
														'nohref':'',
														'autoplay':'',
														'controls':'',
														'loop':'',
														'muted':'',
														'preload':'',
														'src':'',
														'color':'',
														'face':'',
														'size':'',
														'balance':'',
														'volume':'',
														'bgcolor':'',
														'bgproperties':'',
														'bottommargin':'',
														'leftmargin':'',
														'link':'',
														'rightmargin':'',
														'scroll':'',
														'text':'',
														'topmargin':'',
														'vlink':'',
														'clear':'',
														'autofocus':'',
														'form':'',
														'formaction':'',
														'formenctype':'',
														'formmethod':'',
														'formnovalidate':'',
														'formtarget':'',
														'value':'',
														'char':'',
														'charoff':'',
														'valign':'',
														'cite':'',
														'datetime':'',
														'hspace':'',
														'pluginspage':'',
														'disabled':''
													},
													'events':{
														'onclick':'',
														'onblur':'',
														'onchange':'',
														'ondblclick':'',
														'onfocus':'',
														'onkeydown':'',
														'onkeypress':'',
														'onkeyup':'',
														'onload':'',
														'onmousedown':'',
														'onmousemove':'',
														'onmouseout':'',
														'onmouseover':'',
														'onmouseup':'',
														'onreset':'',
														'onselect':'',
														'onsubmit':'',
														'onunload':''
													},
													'parent':'body'
													}) {
		let elements = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'blockquote', 'big', 'body', 'blink', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'comment', 'datalist', 'dd', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figure', 'form', 'frame', 'figcaption', 'font', 'footer', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'marquee', 'mark', 'menu', 'meta', 'meter', 'nav', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'plaintext', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'span', 'source', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'];
		if (array_of_setting['el'] == undefined) {
			array_of_setting['el'] = 'div';
		}
		if (elements.indexOf(array_of_setting['el']) != -1) {
			let element = document.createElement(array_of_setting['el']);
			if (array_of_setting['html'] != undefined) {
				element.innerHTML = array_of_setting['html'];
			}
			if (array_of_setting['attrs'] != undefined) {
				let attr = array_of_setting['attrs'];
				if (attr['id'] != undefined) {
					element.id = attr['id'];
				}
				if (attr['class'] != undefined) {
					element.className = attr['class'];
				}
				if (attr['accesskey'] != undefined) {
					element.accesskey = attr['accesskey'];
				}
				if (attr['dir'] != undefined) {
					element.dir = attr['dir'];
				}
				if (attr['hidden'] != undefined) {
					element.hidden = attr['hidden'];
				}
				if (attr['lang'] != undefined) {
					element.lang = attr['lang'];
				}
				if (attr['spellcheck'] != undefined) {
					element.spellcheck = attr['spellcheck'];
				}
				if (attr['style'] != undefined) {
					element.style = attr['style'];
				}
				if (attr['title'] != undefined) {
					element.title = attr['title'];
				}
				if (attr['download'] != undefined) {
					element.download = attr['download'];
				}
				if (attr['href'] != undefined) {
					element.href = attr['href'];
				}
				if (attr['hreflang'] != undefined) {
					element.hreflang = attr['hreflang'];
				}
				if (attr['name'] != undefined) {
					element.name = attr['name'];
				}
				if (attr['rel'] != undefined) {
					element.rel = attr['rel'];
				}
				if (attr['rev'] != undefined) {
					element.rev = attr['rev'];
				}
				if (attr['shape'] != undefined) {
					element.shape = attr['shape'];
				}
				if (attr['target'] != undefined) {
					element.target = attr['target'];
				}
				if (attr['type'] != undefined) {
					element.type = attr['type'];
				}
				if (attr['align'] != undefined) {
					element.align = attr['align'];
				}
				if (attr['coords'] != undefined) {
					element.coords = attr['coords'];
				}
				if (attr['controls'] != undefined) {
					element.controls = attr['controls'];
				}
				if (attr['scroll'] != undefined) {
					element.scroll = attr['scroll'];
				}
				if (attr['text'] != undefined) {
					element.text = attr['text'];
				}
				if (attr['autofocus'] != undefined) {
					element.autofocus = attr['autofocus'];
				}
				if (attr['contenteditable'] != undefined) {
					element.contenteditable = attr['contenteditable'];
				}
				if (attr['contextmenu'] != undefined) {
					element.contextmenu = attr['contextmenu'];
				}
				if (attr['tabindex'] != undefined) {
					element.tabindex = attr['tabindex'];
				}
				if (attr['alt'] != undefined) {
					element.alt = attr['alt'];
				}
				if (attr['archive'] != undefined) {
					element.archive = attr['archive'];
				}
				if (attr['code'] != undefined) {
					element.code = attr['code'];
				}
				if (attr['codebase'] != undefined) {
					element.codebase = attr['codebase'];
				}
				if (attr['height'] != undefined) {
					element.height = attr['height'];
				}
				if (attr['vspace'] != undefined) {
					element.vspace = attr['vspace'];
				}
				if (attr['width'] != undefined) {
					element.width = attr['width'];
				}
				if (attr['nohref'] != undefined) {
					element.nohref = attr['nohref'];
				}
				if (attr['autoplay'] != undefined) {
					element.autoplay = attr['autoplay'];
				}
				if (attr['loop'] != undefined) {
					element.loop = attr['loop'];
				}
				if (attr['muted'] != undefined) {
					element.muted = attr['muted'];
				}
				if (attr['preload'] != undefined) {
					element.preload = attr['preload'];
				}
				if (attr['src'] != undefined) {
					element.src = attr['src'];
				}
				if (attr['color'] != undefined) {
					element.color = attr['color'];
				}
				if (attr['face'] != undefined) {
					element.face = attr['face'];
				}
				if (attr['size'] != undefined) {
					element.size = attr['size'];
				}
				if (attr['balance'] != undefined) {
					element.balance = attr['balance'];
				}
				if (attr['volume'] != undefined) {
					element.volume = attr['volume'];
				}
				if (attr['bgcolor'] != undefined) {
					element.bgcolor = attr['bgcolor'];
				}
				if (attr['bgproperties'] != undefined) {
					element.bgproperties = attr['bgproperties'];
				}
				if (attr['bottommargin'] != undefined) {
					element.bottommargin = attr['bottommargin'];
				}
				if (attr['leftmargin'] != undefined) {
					element.leftmargin = attr['leftmargin'];
				}
				if (attr['link'] != undefined) {
					element.link = attr['link'];
				}
				if (attr['rightmargin'] != undefined) {
					element.rightmargin = attr['rightmargin'];
				}
				if (attr['topmargin'] != undefined) {
					element.topmargin = attr['topmargin'];
				}
				if (attr['vlink'] != undefined) {
					element.vlink = attr['vlink'];
				}
				if (attr['clear'] != undefined) {
					element.clear = attr['clear'];
				}
				if (attr['form'] != undefined) {
					element.form = attr['form'];
				}
				if (attr['formaction'] != undefined) {
					element.formaction = attr['formaction'];
				}
				if (attr['disabled'] != undefined) {
					element.disabled = attr['disabled'];
				}
				if (attr['pluginspage'] != undefined) {
					element.pluginspage = attr['pluginspage'];
				}
				if (attr['hspace'] != undefined) {
					element.hspace = attr['hspace'];
				}
				if (attr['datetime'] != undefined) {
					element.datetime = attr['datetime'];
				}
				if (attr['cite'] != undefined) {
					element.cite = attr['cite'];
				}
				if (attr['formenctype'] != undefined) {
					element.formenctype = attr['formenctype'];
				}
				if (attr['formmethod'] != undefined) {
					element.formmethod = attr['formmethod'];
				}
				if (attr['valign'] != undefined) {
					element.valign = attr['valign'];
				}
				if (attr['formnovalidate'] != undefined) {
					element.formnovalidate = attr['formnovalidate'];
				}
				if (attr['charoff'] != undefined) {
					element.charoff = attr['charoff'];
				}
				if (attr['char'] != undefined) {
					element.char = attr['char'];
				}
				if (attr['value'] != undefined) {
					element.value = attr['value'];
				}
				if (attr['formtarget'] != undefined) {
					element.formtarget = attr['formtarget'];
				}
			}
			if (array_of_setting['events'] != undefined) {
				let events = array_of_setting['events'];
				if (events['onclick'] != undefined) {
					element.onclick = function () {eval(events['onclick'])};
				}
				if (events['onblur'] != undefined) {
					element.onblur = function () {eval(events['onblur'])};
				}
				if (events['onchange'] != undefined) {
					element.onchange = function () {eval(events['onchange'])};
				}
				if (events['ondblclick'] != undefined) {
					element.ondblclick = function () {eval(events['ondblclick'])};
				}
				if (events['onfocus'] != undefined) {
					element.onfocus = function () {eval(events['onfocus'])};
				}
				if (events['onkeydown'] != undefined) {
					element.onkeydown = function () {eval(events['onkeydown'])};
				}
				if (events['onkeypress'] != undefined) {
					element.onkeypress = function () {eval(events['onkeypress'])};
				}
				if (events['onkeyup'] != undefined) {
					element.onkeyup = function () {eval(events['onkeyup'])};
				}
				if (events['onload'] != undefined) {
					element.onload = function () {eval(events['onload'])};
				}
				if (events['onmousedown'] != undefined) {
					element.onmousedown = function () {eval(events['onmousedown'])};
				}
				if (events['onmousemove'] != undefined) {
					element.onmousemove = function () {eval(events['onmousemove'])};
				}
				if (events['onmouseout'] != undefined) {
					element.onmouseout = function () {eval(events['onmouseout'])};
				}
				if (events['onmouseover'] != undefined) {
					element.onmouseover = function () {eval(events['onmouseover'])};
				}
				if (events['onmouseup'] != undefined) {
					element.onmouseup = function () {eval(events['onmouseup'])};
				}
				if (events['onreset'] != undefined) {
					element.onreset = function () {eval(events['onreset'])};
				}
				if (events['onselect'] != undefined) {
					element.onselect = function () {eval(events['onselect'])};
				}
				if (events['onsubmit'] != undefined) {
					element.onsubmit = function () {eval(events['onsubmit'])};
				}
				if (events['onunload'] != undefined) {
					element.onunload = function () {eval(events['onunload'])};
				}
			} 
			if (array_of_setting['parent'] == undefined) {
				array_of_setting['parent'] = 'body';
			}
			document.querySelector(array_of_setting['parent']).appendChild(element);
		}
	};
};

const elem = element;

function $(selector) {return document.querySelector(selector);}

function del(selector) {
	try {
		$(selector).remove();
		return true;
	}
	catch {
		console.log("Элемент интерфейса не найден, возможно он уже был удалён!");
		return false;
	}
}