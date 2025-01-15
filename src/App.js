import React from "react";

function App() {
  return (
    <div>
    <h1>Welcome to My Updated React Website!</h1>
    <p>This website has been updated successfully.</p>
    
    {/* New Section */}
    <section>
        <h2>About Us</h2>
        <p>
            We are dedicated to providing the best user experience. This section
            highlights the key features of our website.
        </p>
    </section>

    {/* Adding a Button */}
    <button onClick={() => alert("You clicked the button!")}>
        Click Me!
    </button>
</div>
  );
}

export default App;
