//importing dependencies
import { Selector } from 'testcafe';
const _ = require('lodash');

//declaring global constants
const setup = require('../.setup.js');
const _this = new setup();
const baseUrl = _this.uiBaseUrl;
const blogsUrl = baseUrl+"/blogs";
const uitests = _this.uitests;
const username = _this.username;
const email = _this.email;
const message = _this.message;
const fuzzy_keyword = _this.fuzzy_keyword;
const uitests_fixture = _this.uitests_fixture;

//initiating the tests
fixture(uitests_fixture).page(`${baseUrl}`);

//conducting the tests
//test 1: to verify that a robot can not submit the contact details
test
    .meta({
    'testId':uitests[0].testId, 
    'severity':uitests[0].severity, 
    'purpose':uitests[0].purpose,
    'user_action': uitests[0].user_action,
    'expected_behaviour': uitests[0].expected_behaviour,
    'fixtureID':uitests_fixture
    })
    (uitests[0].name, async t => {
        await t.expect(Selector('body').visible).ok();
        await t.click(Selector("#fullpage"));
        for (let i=0; i<8; i++){
            await t.pressKey('down');
            await t.wait(1000);
        }
        const name_input_box = Selector(".tcvpb_column_tc_span12 .row .span6 input").withAttribute("name", "your-name");
        await t.typeText(name_input_box, username);
        const email_input_box = Selector(".tcvpb_column_tc_span12 .row .span6 input").withAttribute("name", "your-email");
        await t.typeText(email_input_box, email);
        const message_input_box = Selector(".tcvpb_column_tc_span12 textarea").withAttribute("name", "your-message");
        await t.typeText(message_input_box, message);
        const captcha_checkbox = Selector("#recaptcha-anchor");
        await t.expect(captcha_checkbox.exists).notOk();
    });
    
//test 2: to verify if blogs search can search by fuzzy inputs ("netehrlands" in this example)
test
    .meta({
    'testId':uitests[1].testId, 
    'severity':uitests[1].severity, 
    'purpose':uitests[1].purpose,
    'user_action': uitests[1].user_action,
    'expected_behaviour': uitests[1].expected_behaviour,
    'fixtureID':uitests_fixture
    })
    (uitests[1].name, async t => {
        await t.navigateTo(blogsUrl);
        //TODO: this is for demo to hackathon organizers. in real, gather a word from existing blog dynamically and convert it to fuzzy.
        const search_box = Selector(".row .blog-header #search-7 #search");
        await t.typeText(search_box, fuzzy_keyword);
        await t.pressKey('enter');
        const result_summary = await Selector(".blog_container #search_results_sum_title").innerText; 
        const result_count = Number(result_summary.split(fuzzy_keyword)[1].split("(")[1].split(")")[0]);
        await t.expect(result_count > 0).ok();
    });






