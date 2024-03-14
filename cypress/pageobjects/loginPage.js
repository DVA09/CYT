class LoginPage {
    //Header locators
    get iconBurgerMenu() {
      return ("//*[@id='react-burger-menu-btn']");
    }
  
    get iconBurgerMenuItem1() {
      return ("//*[@id='inventory_sidebar_link']");
    }
  
    get iconBurgerMenuItem2() {
      return ("//*[@id='about_sidebar_link']");
    }
  
    get iconBurgerMenuItem3() {
      return ("//*[@id='logout_sidebar_link']");
    }
  
  }
  
  module.exports = new LoginPage();
  