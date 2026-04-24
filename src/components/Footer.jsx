

const Footer = () => {
      return (
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center
             bg-black/90 text-white px-6 py-8">
                  <div><h2 className="font-bold text-3xl text-white">Books Vibe</h2>
                  <p>Danrakati,islampur,kalkata ,3409940</p></div>
                  <div className="flex flex-col">
                        <h4 className="font-bold">Navigate</h4>
                        <a href="">Home</a>
                        <a href="">page to Read </a>
                        <a href="">List Books </a>
                        <a href="">Stored Books</a>
                  </div>
                  <div className="flex flex-col">
                  <h4 className="font-bold">Social Media</h4>
                  <a href="">Facebook</a>
                  <a href="">Twitter</a>
                  <a href="">Instagram</a>
                  <a href="">LinkedIn</a>
                  </div>
                  
            </div>
      );
};

export default Footer;