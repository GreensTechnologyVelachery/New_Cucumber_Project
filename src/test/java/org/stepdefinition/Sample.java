package org.stepdefinition;

import org.base.cls.BaseClass;
import org.junit.Assert;
import org.pojo.cls.LoginPOJO;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Sample extends BaseClass {
	
	LoginPOJO l;
	

	@Then("User has to close the browser")
	public void user_has_to_close_the_browser() {
		
	    closeBrowser();
	}
	
	@When("User has to pass the invalid password in password field")
	public void user_has_to_pass_the_invalid_password_in_password_field() {
		
	    passTheTxt(l.getPassword(), "653457654");
	}
	

	@When("User has to launch the url of the fb application")
	public void user_has_to_launch_the_url_of_the_fb_application() {
	    
		launchUrl("https://www.facebook.com/");
	}
	

	@When("User has to pass the invalid username in email field")
	public void user_has_to_pass_the_invalid_username_in_email_field() {
		l = new LoginPOJO();
	    passTheTxt(l.getEmailTxt(), "selenum@gmail.com");
	}
	
	@Given("User has to launch the chrome browser and max the window")
	public void user_has_to_launch_the_chrome_browser_and_max_the_window() {
	    
		browserLaunch();
		maxWindow();
	}

	@When("User has to click the login button")
	public void user_has_to_click_the_login_button() {
		
	    clickWebElement(l.getLoginFindAll());
	}

	@When("Whether user able to see the error page")
	public void whether_user_able_to_see_the_error_page() {
		
	     System.out.println("User able to see the error page");
	}

}
