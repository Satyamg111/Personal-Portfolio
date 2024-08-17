var tabLinks = document.getElementsByClassName("tab-links");
        var tabContents = document.getElementsByClassName("tab-contents");

        function openTab(tabName) {
            for (tabLink of tabLinks) {
                tabLink.classList.remove("active-link")
            }
            for (tabContent of tabContents) {
                tabContent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabName).classList.add("active-tab");
        }


window.onscroll = function(){
    myFunc()
};

function myFunc() {
    if(document.documentElement.scrollTop > 30) {
        document.getElementById('navigation').className = "sticky";
    }
    else {
        document.getElementById('navigation').className = "";
    }
}

var menubar = document.getElementById("sidemenu");

        function openmenu() {
            menubar.style.right = "0";
        }

        function closemenu() {
            menubar.style.right = "-200px";
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxpGM6OzbpBoXfzekNSUJMCfSGU6b2mXk7yGgxT_ZCGS9YfKGz-ayR-KKW3Ilo4vnzPug/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById('msg')
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Massage Sent Successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })