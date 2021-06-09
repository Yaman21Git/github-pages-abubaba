import React, { Component } from 'react'
import '../../App.css'

class terms extends Component{
   render(){
       return(
           <>
           <div className="t-and-c">
              <h1>Terms and Conditions</h1>
              <div className="tc-info">
                 <p>Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern <b>SBM Enterprise</b> relationship with you in relation to this website.</p>
                 <p>The term ‘<b>SBM Enterprise</b>’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is A Block Rohini, Sec 11, New Delhi, India.</p>
                 <p>Our company registration number is 07CUFPS4543D1ZL at Delhi. The term ‘you’ refers to the user or viewer of our website.</p>
                 <p><b>The following terms of use are subjected to the use of this website:</b></p>
                 <p className="an-p">The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
                 <p className="an-p">Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
                 <p className="an-p">Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>
                 <p className="an-p">This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is strictly prohibited.</p>
                 <p className="an-p">Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.</p>
              </div>
           </div>
           </>
       );
   }
}

export default terms;