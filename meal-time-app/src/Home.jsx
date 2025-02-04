function Home() {
  return (
    <div class="container p-0" style={{"width": "100%", "margin": "auto"}}>
      <div class="d-flex flex-row  p-3" style={{"width": "100%"}}>
          <h2 className="text-center" style={{"color": "#ffff", "margin": "auto"}}>Welcome to Quick-Meals!</h2>
      </div>
      <h3 className="text-center" style={{"color": "#ffff", "margin": "auto"}}>Your Ultimate Food Delivery Service!</h3>
      <div class="d-md-flex flex-row m-3 p-3 justify-content-center" style={{"width": "100%"}}>
        <img src="../foodApp.jpg" width={200} height={278} style={{"border-radius": "15px"}} className="ms-0 me-5 mb-3" alt="food"/>
        <div className="row justify-content-center mb-3" style={{"border-radius": "15px", "background-color": "#fff", "width": "300px", "color": "#000"}}>
          <p className="text-center p-3 pb-0">
            Craving something delicious? We've got you covered! With <b>Quick-Meals</b>, 
            getting your favorite meals delivered straight to your doorstep is easier than ever. 
            Explore a wide range of cuisines, track your order in real-time, 
            all from one easy-to-use app.
            Hungry? Let’s get started!
          </p>
          <a href="/foodlisting" class="btn btn-primary mb-3" style={{"width":"150px", "height":"40px", "background-color": "#006D5B", "border": "white", "color": "#ffff"}}>Order Now!</a>               
        </div>
        <img src="../dosa.jpg" width={200} height={278} style={{"border-radius": "15px"}} className="ms-5 mb-3" alt="food"/>
      </div>
    </div>
  );
}
export default Home;