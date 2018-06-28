window.onload = function ()
{
    let el = document.querySelector.bind(document);
    if(el)
    {
        let body    = document.body,
			menu    = el('.menu-left'),
            btnMenu = el('.menu-btn'),
            btnBack = el('.back-btn'),
            background = el('.menu-bg');

        function showMenu()
        {
            body.classList.toggle('open');
            menu.classList.toggle('menu-open');
            btnMenu.classList.toggle('menu-open');
            background.classList.toggle('menu-open');
        }

        function hideMenu()
        {
            body.classList.remove('open');
            menu.classList.remove('menu-open');
            btnMenu.classList.remove('menu-open');
            background.classList.remove('menu-open');
        }

        btnMenu.addEventListener("click", showMenu);
        btnBack.addEventListener("click", hideMenu);
        background.addEventListener("click", hideMenu);
    }
};

class popup{
	constructor(){
        this.el = '.window';
	}

	open() {
		let doc = document.querySelector.bind(document);
		let body = document.body,
			el = doc(this.el);

		body.classList.toggle('open');
		el.classList.toggle('open');
	}

	close() {
        let doc = document.querySelector.bind(document);
        let body = document.body,
            el = doc(this.el);

        body.classList.remove('open');
        el.classList.remove('open');
	}
}


window.popup = new popup();