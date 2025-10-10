import MainLayout from "../layouts/main-layout";
import MainButton from "../components/button";
import LoginForm from "../components/loginForm"

export default function Index() {
  //Logique
  //let pageId = "page-index";

    //const handleClick = () =>{
    //  alert(123)
    //}

  return  <MainLayout title="Login">
            <div  className="container">
                <LoginForm>
                    
                </LoginForm>
            </div>
          </MainLayout>
            
}