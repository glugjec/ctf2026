import { useState } from "react";

export default function round3() {

  const hiddenFlag = "inspectkey76acb34bd23";
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (input.trim() === hiddenFlag) {
      setMessage("✅ Round 3 Cleared!");
    } else {
      setMessage("Incorrect flag.");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(160deg, #001a2e 0%, #00111f 40%, #000a12 100%)",
      fontFamily: "'Barlow', sans-serif",
      color: "white"
    }}>

            <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,700;1,400&family=Barlow+Condensed:wght@700;900&display=swap');

      *{
        box-sizing:border-box;
      }

      body{
        margin:0;
      }

      /* subtle page glow */
      .card{
        background: rgba(255,255,255,0.05);
        backdrop-filter: blur(22px);
        padding:3rem 2.5rem;
        border-radius:18px;
        border:1px solid rgba(0,230,118,0.22);
        width:650px;
      
        max-width:90%;
        text-align:center;
        position:relative;

        box-shadow:
          0 0 25px rgba(0,230,118,0.08),
          0 12px 40px rgba(0,0,0,0.65);

        animation:fadeUp .6s ease;
      }

      /* top accent line */
      .card::before{
        content:"";
        position:absolute;
        top:0;
        left:15%;
        right:15%;
        height:2px;
        background:linear-gradient(90deg,transparent,#00e676,transparent);
      }

      /* title */
      .title{
        font-family:'Barlow Condensed', sans-serif;
        font-weight:900;
        letter-spacing:0.08em;
        font-size:1.8rem;
        margin-bottom:6px;

        background:linear-gradient(90deg,#00e676,#ffffff);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

      /* hidden container stays hidden */
      .input{
        display:none;
      }

      /* input styling */
      .input{
        width:100%;
        padding:13px 14px;
        margin-top:18px;
        border-radius:9px;

        border:1.5px solid rgba(0,230,118,0.3);
        background:rgba(0,0,0,0.45);
        color:white;

        font-family:'Barlow',sans-serif;
        font-size:0.95rem;

        outline:none;
        transition:all .2s ease;
      }

      .input::placeholder{
        color:rgba(255,255,255,0.35);
      }

      .input:focus{
        border-color:#00e676;
        box-shadow:0 0 0 3px rgba(0,230,118,0.15);
      }

      /* button */
      .btn{
        margin-top:16px;
        width:100%;
        padding:13px;

        border-radius:9px;
        border:1.5px solid #00e676;

        background:rgba(0,230,118,0.1);
        color:#00e676;

        font-weight:700;
        letter-spacing:0.18em;
        font-family:'Barlow Condensed',sans-serif;

        text-transform:uppercase;
        cursor:pointer;

        transition:all .2s ease;
      }

      .btn:hover{
        background:#00e676;
        color:#08110b;

        box-shadow:0 0 22px rgba(0,230,118,0.45);
        transform:translateY(-1px);
      }

      .btn:active{
        transform:translateY(0);
      }

      /* message glow */
      p{
        font-family:'Barlow',sans-serif;
      }

      p:last-child{
        font-weight:700;
        letter-spacing:.05em;
        text-shadow:0 0 10px rgba(0,230,118,0.6);
      }

      /* animation */
      @keyframes fadeUp{
        from{
          opacity:0;
          transform:translateY(25px);
        }
        to{
          opacity:1;
          transform:translateY(0);
        }
      }

      /* ambient background glow */
      body::before{
        content:"";
        position:fixed;
        top:20%;
        left:15%;
        width:320px;
        height:320px;
        border-radius:50%;

        background:radial-gradient(circle,rgba(0,230,118,0.07),transparent 70%);
        pointer-events:none;
      }

      body::after{
        content:"";
        position:fixed;
        bottom:15%;
        right:10%;
        width:260px;
        height:260px;
        border-radius:50%;

        background:radial-gradient(circle,rgba(59,130,246,0.08),transparent 70%);
        pointer-events:none;
      }
      `}</style>

  <div className="card">

 <h1 
  className="title"
  style={{ fontSize: "48px", fontWeight: "700" }}
>
  Round 3
</h1>

<p 
  style={{
    color: "rgba(255,255,255,0.6)",
    marginTop: "10px",
    fontSize: "20px",
    lineHeight: "1.6"
  }}
>
  Only a keen Inspector can <br />
  display what none can
  <br />
  Search Carefully
</p>

 
  <div className="layer-root" style={{display:"none"}}>

    <div className="layer-a">
      <div className="layer-b">
        <div className="layer-c">
          <div className="layer-d">
            <div className="layer-e">

              <div>
                {"FLAG{NOT_THE_REAL_FLAG}"}
              </div>

              <div className="system-node" data-cache="true">
                <div className="debug-layer">
                  <div className="security-node">
                    <div className="trace-layer">
                      <div>{"Integrity check complete."}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="layer-f">
      <div className="layer-g">
        <div className="layer-h">
          <div className="layer-i">
            <div className="layer-j">

              <div>
                {"FLAG{STILL_NOT_THE_FLAG}"}
              </div>

              <div data-temp="ignore">
                <div data-debug="false">
                  <div data-build="stable">
                    <div>{"Cache layer initialized"}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="layer-x">
      <div className="layer-y">
        <div className="layer-z">
          <div className="layer-omega">
            <div className="deep-core">

              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div>

                              <div id="deep-secret-pass">
                                {"inspectkey76acb34bd23"}
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>


  {/* Hidden input container */}
  <div className="input" id="flag-input">

    <input
      type="text"
      placeholder="Enter the flag"
      className="input"
      value={input}
      onChange={(e)=>setInput(e.target.value)}
    />

    <button onClick={handleSubmit} className="btn">
      Submit 
    </button>

  </div>


  {message && (
    <p style={{marginTop:"15px", color:"#00e676"}}>
      {message}
    </p>
  )}

</div>

    </div>
  );
}