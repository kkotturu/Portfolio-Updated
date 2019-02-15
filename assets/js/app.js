$(document).ready(function () {
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 200
    });
    //populating content
    function populateIntro() {
        let introTitle = $("<p id='intro-headText'>Front End Developer</p>");
        let introContent = $("<p id='intro-text'>Designer</p>");
        let introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        let aboutTitle = $("<p id='about-headText'>About Me</p>");
        let aboutContent = $(`<p id='about-text'>An enthusiastic web-developer with a solid technical experience as a Sr.QA Test Engineer 
        in Insurance and Banking industries with a profound knowledge of software development life cycle. I desire to grow with the attained skill set in 
        HTML, CSS and JavaScript who has currently to build best in class and user centric web applications.</p>`)

        let aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent);
        return aboutDiv;
    }

    function populatePortfolio() {
        let portfolioTitle = $("<p id='portfolio-headText'>Portfolio</p>");
        //make cards from materialize card
        let projcard1 = $(`<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'>
        <img src='assets/images/Crystal_Collector.png'>Crystal Collector</div><div class='card-content'>
        <p class='card-textcontent'>A fun game created using jQuery, CSS and JavaScript.</p>
        </div><a href='https://kkotturu.github.io/unit-4-game.io/' target='_blank'>View Project</a>
        <p><a class='black-text' href='https://github.com/kkotturu/unit-4-game' target='_blank'>GitHub</a></p></div></div>`);

        let projcard2 = $(`<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/Trivia.png'>Trivia</div>
        <div class='card-content'><p class='card-textcontent'>A timed trivia question game created using JavaScript, timeout functions and CSS for design</p></div>
        <a href='https://kkotturu.github.io/TriviaGame.io/' target='_blank'>View Project</a><p><a class='black-text' href='https://github.com/kkotturu/TriviaGame' target='_blank'>GitHub</a></p></div></div>`);

        let projcard3 = $(`<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/Gifhy.png'>GifTastic</div>
        <div class='card-content'><p class='card-textcontent'>A web page using the GIPHY API to generate categories of buttons to generate gifs</p></div>
        <a href='https://kkotturu.github.io/GifTastic.io/' target='_blank'>View Project</a><p><a class='black-text' href='https://github.com/kkotturu/GifTastic' target='_blank'>GitHub</a></p></div></div>`);

        let projcard4 = $(`<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/Train.png'>Train</div>
        <div class='card-content'><p class='card-textcontent'>An activity created to know the arrival of next scheduled train using momemtjs</p></div>
        <a href='https://kkotturu.github.io/Train-Activity.io/' target='_blank'>View Project</a><p><a class='black-text' href='https://github.com/kkotturu/Train-Activity' target='_blank'>GitHub</a></p></div></div>`);

        let projcard5 = $(`<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/Krave.png'>Krave</div>
        <div class='card-content'><p class='card-textcontent'>App allows user to make decisions about whether to cook at home or to find food options outside the home.
        The app is created using APIs, CSS, jQuery, JavaScript.</p></div>
        <a href='https://krave-project1.firebaseapp.com/' target='_blank'>View Project</a><p><a class='black-text' href='https://github.com/kkotturu/Krave-Project1' target='_blank'>GitHub</a></p></div></div>`);

        let cardrow = $("<div class='row'></div>");
        cardrow.append(projcard1).append(projcard2).append(projcard3);
        let cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard5);
        let portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value", 3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        return portfolioDiv;
    }


    function populateContact() {
        let contactTitle = $("<p id='contact-headText'>Contact</p>");
        let contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
        let contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><a href='mailto:kkotturu@gmail.com'>kkotturu@gmail.com</a></p>")
        let imgrow = $("<div class='row'></div>");
        let githubImgDiv = $(`<div class='col s6'><a href='https://github.com/kkotturu' target='_blank'><img class='responsive-img iconImage' src='assets/images/githublogo.jpg'></a></div>`);
        let linkedinImgDiv = $(`<div class='col s6'><a href='http://www.linkedin.com/in/kiranmai-kotturu-11525836' target='_blank'><img class='responsive-img iconImage' src='assets/images/linkedinlogo.jpg'></a></div>`);
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        let contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value", 4);
        contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2);
        return contactDiv;
    }


    function changeDiv(cValue, valueNew, newDiv) {
        if (cValue != valueNew) {
            $("div[value=" + cValue + "]").fadeOut(1000, function () {
                newDiv.fadeIn(400);
            });
        }
    }

    let currentValue = 1;
    let intro = populateIntro();
    let about = populateAbout();
    let portfolio = populatePortfolio();
    let contact = populateContact();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);

    //when user first loads page, only show portfolio
    intro.hide();
    about.hide();
    portfolio.show();
    contact.hide();

    //click functions
    $("#homePage").click(function () {
        changeDiv(currentValue, 1, intro);
        currentValue = 1;
        portfolio.hide();
        about.hide();
        intro.show();
    })
    $("#topTitle").click(function () {
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function () {
        changeDiv(currentValue, 2, about);
        currentValue = 2;
        portfolio.hide();
    })
    $("#portfolioPage").click(function () {
        changeDiv(currentValue, 3, portfolio);
        currentValue = 3;
    })
    $("#contactPage").click(function () {
        changeDiv(currentValue, 4, contact);
        currentValue = 4;
        intro.hide();
        about.hide();
        portfolio.hide();
    })
})