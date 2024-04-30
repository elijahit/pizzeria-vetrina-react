import Footer from "../components/Footer";
import Header from "../components/Header";
import "./ErrorPage.css";

function ErrorPage() {
  return(
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mt-5">OPS! ABBIAMO UN ERRORE</h1>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;