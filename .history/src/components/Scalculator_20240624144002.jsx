import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
function Scalculator() {
  return (
      <>
        <form action="#" method="post" name="frm" id="frm" autocomplete="off">
                            <div className="form-horizontal">
                                <div className="form-group">
                                    <h3 className="section-heading">1. Choose any one of the following</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 form-field">
                                        <div className="form-group">
                                            <div className="label_style">
                                                <input type="hidden" name="checkbox_fill_one" value="0"/>
                                                <input type="checkbox" name="checkbox_fill_one" className="chk" id="checkbox_fill_one" value="1" onclick="check_fill(this);"/>
                                                Total Roof Top Area
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1 form-field">
                                        <div className="form-group">
                                            <p className="text-center">(OR)</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 form-field">
                                        <div className="form-group">
                                            <div className="label_style">
                                                <input type="hidden" name="checkbox_fill_two" value="0"/>
                                                <input type="checkbox" name="checkbox_fill_two" className="chk" id="checkbox_fill_two" value="1" onclick="check_fill(this);"/>
                                                Solar Panel Capacity you want to install<br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1 form-field">
                                        <div className="form-group">
                                            <p className="text-center">(OR)</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 form-field">
                                        <div className="form-group">
                                            <div className="label_style">
                                                <input type="hidden" name="checkbox_fill_three" value="0"/>
                                                <input type="checkbox" name="checkbox_fill_three" className="chk" id="checkbox_fill_three" value="1" onclick="check_fill(this);"/>
                                                Your budget<br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" name="roof_area_txt" id="roof_area_txt" className="form-control chk-grp chk-grp1" maxlength="10" value="" disabled="disabled" style="display: none;"/>
                                                <div className="input-group-append">
                                                    <span className="input-group-text input-group-addon chk-grp chk-grp1" disabled="disabled" style="display: none;">
                                                        <input type="radio" name="radio_gp" className="radio_gp_id chk-grp1" value="2" checked="checked"/>
                                                        Sq. m. &nbsp;
                                                        <input type="radio" name="radio_gp" className="radio_gp_id chk-grp1" value="1"/>
                                                        Sq. Feet
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row form-group txt_option txt_option1" style="display: none;">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label id="percent_area" className="chk-grp chk-grp1" disabled="disabled" style="display: none;">% of Shadow Free Open Space Available</label>
                                            <div className="input-group">
                                                <input type="text" name="roof_area_percentage_txt" id="roof_area_percentage_txt" className="form-control chk-grp chk-grp1" maxlength="3" value="" disabled="disabled" style="display: none;"/>
                                                <div className="input-group-append"> <span className="input-group-text">%</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <span className="irs js-irs-1 irs-with-grid"><span className="irs"><span className="irs-line" tabindex="0"><span className="irs-line-left"></span><span className="irs-line-mid"></span><span className="irs-line-right"></span></span><span className="irs-min">1</span><span className="irs-max">100</span><span className="irs-from" style="visibility: hidden;">0</span><span className="irs-to" style="visibility: hidden;">0</span><span className="irs-single">0</span></span><span className="irs-grid"><span className="irs-grid-pol" style="left: 0%"></span><span className="irs-grid-text js-grid-text-0" style="left: 0%">1</span><span className="irs-grid-pol small" style="left: 20%"></span><span className="irs-grid-pol small" style="left: 15%"></span><span className="irs-grid-pol small" style="left: 10%"></span><span className="irs-grid-pol small" style="left: 5%"></span><span className="irs-grid-pol" style="left: 25%"></span><span className="irs-grid-text js-grid-text-1" style="left: 25%; visibility: hidden;">26</span><span className="irs-grid-pol small" style="left: 45%"></span><span className="irs-grid-pol small" style="left: 40%"></span><span className="irs-grid-pol small" style="left: 35%"></span><span className="irs-grid-pol small" style="left: 30%"></span><span className="irs-grid-pol" style="left: 50%"></span><span className="irs-grid-text js-grid-text-2" style="left: 50%; visibility: hidden;">51</span><span className="irs-grid-pol small" style="left: 70%"></span><span className="irs-grid-pol small" style="left: 65%"></span><span className="irs-grid-pol small" style="left: 60%"></span><span className="irs-grid-pol small" style="left: 55%"></span><span className="irs-grid-pol" style="left: 75%"></span><span className="irs-grid-text js-grid-text-3" style="left: 75%; visibility: hidden;">75</span><span className="irs-grid-pol small" style="left: 95%"></span><span className="irs-grid-pol small" style="left: 90%"></span><span className="irs-grid-pol small" style="left: 85%"></span><span className="irs-grid-pol small" style="left: 80%"></span><span className="irs-grid-pol" style="left: 100%"></span><span className="irs-grid-text js-grid-text-4" style="left: 100%">100</span></span><span className="irs-bar"></span><span className="irs-bar-edge"></span><span className="irs-shadow shadow-single"></span><span className="irs-slider single"></span></span><input type="text" id="area_range" value="" name="range" className="irs-hidden-input" tabindex="-1" readonly=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row form-group txt_option txt_option2" style="display: none;">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" name="capacity_txt" id="capacity_txt" className="form-control chk-grp chk-grp2" maxlength="11" size="11" onkeypress="return number(event)" value="" disabled="disabled" style="display: none;"/>
                                                <div className="input-group-append"> <span className="input-group-text">kW</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <span className="irs js-irs-2 irs-with-grid"><span className="irs"><span className="irs-line" tabindex="0"><span className="irs-line-left"></span><span className="irs-line-mid"></span><span className="irs-line-right"></span></span><span className="irs-min">1</span><span className="irs-max">500</span><span className="irs-from" style="visibility: hidden;">0</span><span className="irs-to" style="visibility: hidden;">0</span><span className="irs-single">0</span></span><span className="irs-grid"><span className="irs-grid-pol" style="left: 0%"></span><span className="irs-grid-text js-grid-text-0" style="left: 0%">1</span><span className="irs-grid-pol small" style="left: 20%"></span><span className="irs-grid-pol small" style="left: 15%"></span><span className="irs-grid-pol small" style="left: 10%"></span><span className="irs-grid-pol small" style="left: 5%"></span><span className="irs-grid-pol" style="left: 25%"></span><span className="irs-grid-text js-grid-text-1" style="left: 25%; visibility: hidden;">126</span><span className="irs-grid-pol small" style="left: 45%"></span><span className="irs-grid-pol small" style="left: 40%"></span><span className="irs-grid-pol small" style="left: 35%"></span><span className="irs-grid-pol small" style="left: 30%"></span><span className="irs-grid-pol" style="left: 50%"></span><span className="irs-grid-text js-grid-text-2" style="left: 50%; visibility: hidden;">251</span><span className="irs-grid-pol small" style="left: 70%"></span><span className="irs-grid-pol small" style="left: 65%"></span><span className="irs-grid-pol small" style="left: 60%"></span><span className="irs-grid-pol small" style="left: 55%"></span><span className="irs-grid-pol" style="left: 75%"></span><span className="irs-grid-text js-grid-text-3" style="left: 75%; visibility: hidden;">375</span><span className="irs-grid-pol small" style="left: 95%"></span><span className="irs-grid-pol small" style="left: 90%"></span><span className="irs-grid-pol small" style="left: 85%"></span><span className="irs-grid-pol small" style="left: 80%"></span><span className="irs-grid-pol" style="left: 100%"></span><span className="irs-grid-text js-grid-text-4" style="left: 100%">500</span></span><span className="irs-bar"></span><span className="irs-bar-edge"></span><span className="irs-shadow shadow-single"></span><span className="irs-slider single"></span></span><input type="text" id="capacity_range" value="" name="range" className="irs-hidden-input" tabindex="-1" readonly=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row form-group txt_option txt_option3" style="display: none;">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" name="budget_txt" id="budget_txt" className="form-control chk-grp chk-grp3" maxlength="11" size="11" onkeypress="return number(event)" value="" disabled="disabled" style="display: none;" />
                                                <div className="input-group-append"> <span className="input-group-text">Rs.</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <span className="irs js-irs-3 irs-with-grid"><span className="irs"><span className="irs-line" tabindex="0"><span className="irs-line-left"></span><span className="irs-line-mid"></span><span className="irs-line-right"></span></span><span className="irs-min">100000</span><span className="irs-max">10000000</span><span className="irs-from" style="visibility: hidden;">0</span><span className="irs-to" style="visibility: hidden;">0</span><span className="irs-single">0</span></span><span className="irs-grid"><span className="irs-grid-pol" style="left: 0%"></span><span className="irs-grid-text js-grid-text-0" style="left: 0%">100000</span><span className="irs-grid-pol small" style="left: 20%"></span><span className="irs-grid-pol small" style="left: 15%"></span><span className="irs-grid-pol small" style="left: 10%"></span><span className="irs-grid-pol small" style="left: 5%"></span><span className="irs-grid-pol" style="left: 25%"></span><span className="irs-grid-text js-grid-text-1" style="left: 25%; visibility: hidden;">2575000</span><span className="irs-grid-pol small" style="left: 45%"></span><span className="irs-grid-pol small" style="left: 40%"></span><span className="irs-grid-pol small" style="left: 35%"></span><span className="irs-grid-pol small" style="left: 30%"></span><span className="irs-grid-pol" style="left: 50%"></span><span className="irs-grid-text js-grid-text-2" style="left: 50%; visibility: hidden;">5050000</span><span className="irs-grid-pol small" style="left: 70%"></span><span className="irs-grid-pol small" style="left: 65%"></span><span className="irs-grid-pol small" style="left: 60%"></span><span className="irs-grid-pol small" style="left: 55%"></span><span className="irs-grid-pol" style="left: 75%"></span><span className="irs-grid-text js-grid-text-3" style="left: 75%; visibility: hidden;">7525000</span><span className="irs-grid-pol small" style="left: 95%"></span><span className="irs-grid-pol small" style="left: 90%"></span><span className="irs-grid-pol small" style="left: 85%"></span><span className="irs-grid-pol small" style="left: 80%"></span><span className="irs-grid-pol" style="left: 100%"></span><span className="irs-grid-text js-grid-text-4" style="left: 100%">10000000</span></span><span className="irs-bar"></span><span className="irs-bar-edge"></span><span className="irs-shadow shadow-single"></span><span className="irs-slider single"></span></span><input type="text" id="budget_range" value="" name="range" className="irs-hidden-input" tabindex="-1" readonly="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-md-12">
                                            <hr/>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <h3 className="section-heading">2. Select State and Customer Category</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <select name="state" required="required" id="state" className="form-control">
                                                <option value="">Select State</option>
                                                <option value="35">ANDAMAN and NICOBAR ISLANDS</option>
                                                <option value="28">ANDHRA PRADESH</option>
                                                <option value="12">ARUNACHAL PRADESH</option>
                                                <option value="18">ASSAM</option>
                                                <option value="10">BIHAR</option>
                                                <option value="4">CHANDIGARH</option>
                                                <option value="22">CHHATTISGARH</option>
                                                <option value="26">DADRA and NAGAR HAVELI</option>
                                                <option value="25">DAMAN and DIU</option>
                                                <option value="30">GOA</option>
                                                <option value="24">GUJARAT</option>
                                                <option value="6">HARYANA</option>
                                                <option value="2">HIMACHAL PRADESH</option>
                                                <option value="1">JAMMU and KASHMIR</option>
                                                <option value="20">JHARKHAND</option>
                                                <option value="29">KARNATAKA</option>
                                                <option value="32">KERALA</option>
                                                <option value="31">LAKSHADWEEP</option>
                                                <option value="23">MADHYA PRADESH</option>
                                                <option value="27">MAHARASHTRA</option>
                                                <option value="14">MANIPUR</option>
                                                <option value="17">MEGHALAYA</option>
                                                <option value="15">MIZORAM</option>
                                                <option value="13">NAGALAND</option>
                                                <option value="7">NCT OF DELHI</option>
                                                <option value="21">ORISSA</option>
                                                <option value="34">PUDUCHERRY</option>
                                                <option value="3">PUNJAB</option>
                                                <option value="8">RAJASTHAN</option>
                                                <option value="11">SIKKIM</option>
                                                <option value="33">TAMIL NADU</option>
                                                <option value="36">TELANGANA</option>
                                                <option value="16">TRIPURA</option>
                                                <option value="9">UTTAR PRADESH</option>
                                                <option value="5">UTTARAKHAND</option>
                                                <option value="19">WEST BENGAL</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <select name="customer_type" id="customer_type" className="form-control">
                                                <option value="">Select Category of Customer</option>
                                                <option value="2">Residential</option>
                                                <option value="4">Institutional</option>
                                                <option value="3">Industrial</option>
                                                <option value="1">Commerical</option>
                                                <option value="5">Government</option>
                                                <option value="7">Social Sector</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-md-12">
                                            <hr/>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <h3 className="section-heading">3. What is your average Electricity Cost? :</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" name="electricity_txt" id="electricity_txt" className="form-control" size="10" maxlength="5" value="" />
                                                <div className="input-group-append"> <span className="input-group-text">Rs. / kWh</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <span className="irs js-irs-0 irs-with-grid"><span className="irs"><span className="irs-line" tabindex="0"><span className="irs-line-left"></span><span className="irs-line-mid"></span><span className="irs-line-right"></span></span><span className="irs-min" style="visibility: visible;">4</span><span className="irs-max" style="visibility: visible;">20</span><span className="irs-from" style="visibility: hidden;">0</span><span className="irs-to" style="visibility: hidden;">0</span><span className="irs-single" style="left: 22.0994%;">8</span></span><span className="irs-grid" style="width: 94.359%; left: 2.72051%;"><span className="irs-grid-pol" style="left: 0%"></span><span className="irs-grid-text js-grid-text-0" style="left: 0%; margin-left: -3.41746%;">4</span><span className="irs-grid-pol small" style="left: 20%"></span><span className="irs-grid-pol small" style="left: 15%"></span><span className="irs-grid-pol small" style="left: 10%"></span><span className="irs-grid-pol small" style="left: 5%"></span><span className="irs-grid-pol" style="left: 25%"></span><span className="irs-grid-text js-grid-text-1" style="left: 25%; visibility: visible; margin-left: -3.46154%;">8</span><span className="irs-grid-pol small" style="left: 45%"></span><span className="irs-grid-pol small" style="left: 40%"></span><span className="irs-grid-pol small" style="left: 35%"></span><span className="irs-grid-pol small" style="left: 30%"></span><span className="irs-grid-pol" style="left: 50%"></span><span className="irs-grid-text js-grid-text-2" style="left: 50%; visibility: visible; margin-left: -4.49518%;">12</span><span className="irs-grid-pol small" style="left: 70%"></span><span className="irs-grid-pol small" style="left: 65%"></span><span className="irs-grid-pol small" style="left: 60%"></span><span className="irs-grid-pol small" style="left: 55%"></span><span className="irs-grid-pol" style="left: 75%"></span><span className="irs-grid-text js-grid-text-3" style="left: 75%; visibility: visible; margin-left: -4.72356%;">16</span><span className="irs-grid-pol small" style="left: 95%"></span><span className="irs-grid-pol small" style="left: 90%"></span><span className="irs-grid-pol small" style="left: 85%"></span><span className="irs-grid-pol small" style="left: 80%"></span><span className="irs-grid-pol" style="left: 100%"></span><span className="irs-grid-text js-grid-text-4" style="left: 100%; margin-left: -5.16026%;">20</span></span><span className="irs-bar" style="left: 2.82051%; width: 23.5897%;"></span><span className="irs-bar-edge"></span><span className="irs-shadow shadow-single" style="display: none;"></span><span className="irs-slider single" style="left: 23.5897%;"></span></span><input type="text" id="electricity_range" value="" name="range" className="irs-hidden-input" tabindex="-1" readonly="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group text-center">
                                        <input name="submit" type="button" id="submit" className="btn btn-bordered calculate-link" onclick="return calculate();" value="Calculate" />
                                    </div>
                                </div>
                            </div>
                        </form>
      </>
  )
}

export default Scalculator