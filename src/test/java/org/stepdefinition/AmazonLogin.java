package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.base.cls.BaseClass;
import org.pojo.cls.AmazonPOJO;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AmazonLogin extends BaseClass {
	
	AmazonPOJO a;
	
	@Given("To launch the firefox browser and max the browser")
	public void to_launch_the_firefox_browser_and_max_the_browser() {
	    
		browserLaunch();
		maxWindow();
	}

	@When("To launch the amazon application")
	public void to_launch_the_amazon_application() {
	    
		launchUrl("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&");
	}

	@When("To pass invalid email in email field")
	public void to_pass_invalid_email_in_email_field(io.cucumber.datatable.DataTable d) {
	    
		a = new AmazonPOJO();
		Map<String, String> m = d.asMap(String.class, String.class);
		passTheTxt(a.getEmailEle(), m.get("emailtwo"));
	}

	@When("To click the continue button")
	public void to_click_the_continue_button() {
	    
		clickWebElement(a.getContinueBtn());
	}
	
	@When("To pass the invalid password in password field")
	public void toPassTheInvalidPasswordInPasswordField(io.cucumber.datatable.DataTable d) {
	 
		List<Map<String, String>> m = d.asMaps();
		passTheTxt(a.getPasswordEle(), m.get(1).get("passwordtwo"));
	}

	@When("To click the signin button")
	public void toClickTheSigninButton() {
	    
		clickWebElement(a.getSigninBtn());
	}
	
}
