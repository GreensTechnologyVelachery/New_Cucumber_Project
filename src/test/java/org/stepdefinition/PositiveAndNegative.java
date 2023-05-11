package org.stepdefinition;

import org.base.cls.BaseClass;
import org.pojo.cls.LoginPOJO;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PositiveAndNegative extends BaseClass {
	
	LoginPOJO l;
	
	@Given("To launch chrome browser and max window")
	public void to_launch_chrome_browser_and_max_window() {
	   
		browserLaunch();
		maxWindow();
	}

	@When("To launch the facebook url")
	public void to_launch_the_facebook_url() {
	   
		launchUrl("https://www.facebook.com/");
	}

	@When("To pass the positive and negative {string} usernames in email field")
	public void to_pass_the_positive_and_negative_usernames_in_email_field(String em) {
	    
		l = new LoginPOJO();
		passTheTxt(l.getEmailTxt(), em);
	}

	@When("To pass the {string} positive and negative password in password field")
	public void to_pass_the_positive_and_negative_password_in_password_field(String p) {
	   
		passTheTxt(l.getPassword(), p);
	}

	@When("To click the login button")
	public void to_click_the_login_button() {
	    
		clickWebElement(l.getLoginFindAll());
	}

	@Then("To close the browser")
	public void to_close_the_browser() {
	    
		closeBrowser();
	}

}
