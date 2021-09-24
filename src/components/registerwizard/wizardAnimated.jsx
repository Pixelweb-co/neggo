import React, { useEffect, useState } from 'react'


const Wizard = props => {


  useEffect(()=>{

  window.jQuery(($)=>{
    //Dynamic Next
  $(".btn-next").on("click", function(){
    var nextStep = $("#" + $(this).parents(".slider-step").data("nextStep"));
    $(this).parents(".slider-step").attr("data-anim","hide-to--left");
    nextStep.attr("data-anim","show-from--right");
  });
  
  //Dynamic Back
  $(".btn-back").on("click", function(){
    var backTo = $("#" + $(this).parents(".slider-step").data("backTo"));

    $(this).parents(".slider-step").attr("data-anim","hide-to--right");
    backTo.attr("data-anim","show-from--left");
  });

})
},[]);

  

  if (props.currentStep !== 1) {
    window.jQuery(($)=>{

      $('.parent-box').addClass('move-right');
     
     
      setTimeout(function(){
        return null;
        
        },5000)

      
    })  
    
    
  
  
  }else{
    window.jQuery(($)=>{
      $('.parent-box').addClass('move-right');
     
     
    })  
    


  }

  return (
    
   <div class="">
  <div class="row">
    <div class="col-sm-12 col-md-12 col-md-offset-4 col-lg-12 col-lg-offset-3">
      {/* <!-- Offset --> */}
      <div class="form-step-wrap">
          <div id="step1box" class="slider-step first-step step" data-next-step="step-mortgage-balance">
            <div class="row tall">

              <div class="col-xs-12 form-questions">
                <div class="row">
                  <div class="col-xs-12">
                    <label>Choose Loan Type</label>
                    <select id="loanpurpose" name="loanpurpose" tabindex="1" class="form-control">
                      <option> Home Purchase</option>
                      <option selected>VA Streamline Refinance</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <label class="pad-top">Choose State</label>
                    <p id="state-error" class="input-error">Please Select State</p>
                    <select name="state" tabindex="2" class="form-control">
                      <option value="">Choose State...</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* <!-- /Form Questions --> */}
            </div>
            {/* <!-- /Row --> */}
            <div class="row">

              <div class="col-xs-12 border">
                <input type='button' value='Continue' tabindex="3" class="btn-next btn-success form-control" />
              </div>
            </div>
          </div>
          {/* <!-- Upper Text --> */}
          <div id="step-mortgage-balance" class="slider-step step" data-next-step="step-home-value" data-back-to="step1box">
            <div class="row">
              <div class="col-xs-12  ">
                <label class="streamline">Mortgage Balance</label>
                <p id="mortgagebalance-error" class="input-error">Please Select Mortgage Balance</p>
                <select name="mortgagebalance" class="form-control streamline" tabindex="4">
                  <option value="">Estimate Balance...</option>

                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <input type='button' value='Continue' tabindex="5" class="btn-success form-control btn-next" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <a class="btn-back">back</a>
              </div>
            </div>
          </div>

          <div id="step-home-value" class="slider-step step" data-next-step="step-interest-rate" data-back-to="step-mortgage-balance">

            <div class="row">
              <div class="col-xs-12  ">
                <label>Property Value</label>
                <p id="propertyvalue-error" class="input-error">Please Select Property Value</p>
                <select name="propertyvalue" class="form-control" tabindex="6">
                  <option value="">Estimate Value...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <input id="next-home-value" type='button' value='Continue' tabindex="7" class="btn-success form-control btn-next" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <a id="back-home-value" class="btn-back">back</a>
              </div>
            </div>
          </div>
    
          <div id="step-interest-rate" class="slider-step step" data-next-step="step-home-buy-process" data-back-to="step-home-value">
          
            <div class="row">
              <div class="col-xs-12  ">
                <label>Current Interest Rate</label>
                <p id="mortgagerate-error" class="input-error">Please Select Interest Rate</p>
                <select name="mortgagerate" class="form-control" tabindex="8">
                  <option value="3"   >Under 3.5%</option>
                  <option value="3.5" >3.50% - 3.74%</option>
                  <option value="3.75">3.75% - 3.99%</option>
                  <option value="4"   >4.00% - 4.24%</option>
                  <option value="4.25">4.25% - 4.49%</option>
                  <option value="4.5" >4.50% - 4.74%</option>
                  <option value="4.75">4.75% - 4.99%</option>
                  <option value="5"   selected='selected'>5.00% - 5.24%</option>
                  <option value="5.25">5.25% - 5.49%</option>
                  <option value="5.5" >5.50% - 5.74%</option>
                  <option value="5.75">5.75% - 5.99%</option>
                  <option value="6"   >6.00% - 6.49%</option>
                  <option value="6.5" >6.50% - 6.99%</option>
                  <option value="7"   >7.00% - 7.50%</option>
                  <option value="8"   >Over 7.5%</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <input id="next-interest-rate" type='button' value='Continue' tabindex="9" class="btn-success form-control btn-next" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <a id="back-interest-rate" class="btn-back">back</a>
              </div>
            </div>
          </div>
         
          <div id="step-home-buy-process" class="slider-step step">
         
          <div class="row">
            <div class="col-xs-12 ">
              <label class="purchase">Describe your home buying progress.</label>
              <p id="mortgagegoal-error" class="input-error">Please Select Home Buying Progress</p>
              <select name="mortgagegoal" class="form-control purchase" tabindex="10">
                <option value="">---Select---</option>
                <option value="signed_pa">I have a signed purchase agreement</option>
                <option value="offer_pending">I am in the process of making an offer on a home</option>
                <option value="buying_soon">I want to buy a home in the next few months</option>
                <option value="preapproval_letter">I need a pre-approval letter</option>
                <option value="researching">I want to buy a home 6 or more months from now</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <input id="next-home-buy-process" type='button' value='Continue' tabindex="11" class="btn-success form-control btn-next" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <a id="back-home-buy-process" class="btn-back">back</a>
            </div>
          </div>
        </div>

        <div class="clear"></div>
      </div>
     
    </div>
  </div></div>
  


  );
};

export default Wizard;