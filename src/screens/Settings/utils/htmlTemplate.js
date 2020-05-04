export default function HTMLTemplate (title, article, date) {
  return (`
    <div 
      style="
        background-color: #0e1419;
        padding: 10px;
        
        font-family: monospace;
        margin: 15px;
      "
    >
      <div
        style="
          background-color: #282a36;
          padding: 20px;
          border: 2px #bd93f9 solid;
          box-shadow: 0px 0px 10px #bd93f9;
          margin: 5px;
          
        "
      >
        <h1
          style="
            text-align: center;
            color: #50fa7b;
            font-size: 18px;
          "
        >
         ${title}
        </h1>
        <hr
          color="#bd93f9"
          style="
            margin-top: 5px;
            margin-bottom: 5px;
          "
        />
        <p
          style="
            word-break: break-word;
            color: #f8f8f2;
            text-align: justify;
            font-size: 14px;
          "
        >
          ${article}  
        </p>
        <p
          style="
            color: #50fa7b;
            font-weight: bold;
            text-align: center;
            font-size: 14px;
          "
        > 
          ${date}
        </p>
      </div>
    </div>
  `)
}
