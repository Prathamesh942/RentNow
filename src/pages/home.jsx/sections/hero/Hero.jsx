import "./hero.scss"

function Hero() {
  return (
    <div className="home">
        <div className="hero">
            <div className="left">
                <h1>Buy, Rent or Sell your property easily</h1>
                <span>A great Platform to buy, sell or even rent your properties without any commision</span>
                <div className="stats">
                    <div className="stat sleft">
                        <h2>50k+ <br/> renters</h2>
                    </div>
                    <div className="stat sright">
                    <h2>10k+ <br/> properties</h2>
                    </div>
                </div>
                <div className="buttons">
                    <button>Rent</button>
                    <button>Buy</button>
                    <button>Sell</button>
                </div>
            </div>
            <div className="right">
                <img src="https://img.freepik.com/premium-vector/acquiring-mortgage-isolated-cartoon-vector-illustrations_107173-21940.jpg?w=740" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero