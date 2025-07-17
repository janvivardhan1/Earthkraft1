function getContextPath() {
    return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 0)); //2  0
}

//Tomcat
function getContextPathTwo() {
    return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 0));
}


var formURL = getContextPath();
var formURL_Two = getContextPathTwo();


function getFormData() {

    var loginForm = {};

    loginForm.username = document.getElementById("username")
        .value;
    loginForm.password = document.getElementById("password")
        .value;
    //loginForm.captcha=grecaptcha.getResponse();

    alert(loginForm);
    return loginForm;

}

function submit1() {
    var data_ = JSON.stringify(getFormData());
    alert(formURL);
    $.ajax({
        type: "GET",
        url: formURL,
        contentType: 'application/json',
        dataType: "json",
        data: data_,
        success: function (data) {
            alert(data.message);
            console.log(data.message)

        },
        error: function (data) {
            alert(data);
            console.log(data)
        }

    });
}

//ajaxcall

function getroles() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getRoles",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            var selectRole = $('#roles'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                selectRole.append("<option value=" + json_.RESPONSE[i].role_id + " >" + json_.RESPONSE[i].role_name + "</option>")
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

//Get Hotel Type
function getHotelTypes() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getHotelTypes",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            var selectRole = $('#hotelType'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")


             for (i = 0; i < json_.RESPONSE.length; i++) {
             if (document.getElementById('hotel_type_hidden') != null && document.getElementById('hotel_type_hidden').value == json_.RESPONSE[i].htypeId) {
                selectRole.append("<option selected value=" + json_.RESPONSE[i].htypeId + " >" + json_.RESPONSE[i].htypeName + "</option>")
            } else {
                selectRole.append("<option value=" + json_.RESPONSE[i].htypeId + " >" + json_.RESPONSE[i].htypeName + "</option>")
            }
            }


        },
        error: function (data) {
            console.log(data)
        }

    });
}


function getHotels() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getHotels",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            var selectRole = $('#hotelId'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")


             for (i = 0; i < json_.RESPONSE.length; i++) {
             if (document.getElementById('hotel_id_hidden') != null && document.getElementById('hotel_id_hidden').value == json_.RESPONSE[i].hotelId) {
                selectRole.append("<option selected value=" + json_.RESPONSE[i].hotelId + " >" + json_.RESPONSE[i].hotelName + "</option>")
            } else {
                selectRole.append("<option value=" + json_.RESPONSE[i].hotelId + " >" + json_.RESPONSE[i].hotelName + "</option>")
            }
            }


        },
        error: function (data) {
            console.log(data)
        }

    });
}


//getFloors
function getFloors(id) {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getFloors",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            var selectRole = $('#floorId');
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select ---" + "</option>")

             for (i = 0; i < json_.RESPONSE.length; i++) {
                         if (document.getElementById('floor_id_hidden') != null && document.getElementById('floor_id_hidden').value == json_.RESPONSE[i].floorId) {
                            selectRole.append("<option selected value=" + json_.RESPONSE[i].floorId + " >" + json_.RESPONSE[i].floorName + "</option>")
                        } else {
                            selectRole.append("<option value=" + json_.RESPONSE[i].floorId + " >" + json_.RESPONSE[i].floorName + "</option>")
                        }
                        }

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//getRoomsViaHotel
function getRoomsViaHotel(id) {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getRoomsViaHotel",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            var selectRole = $('#roomTypeId');
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select ---" + "</option>")

             for (i = 0; i < json_.RESPONSE.length; i++) {
                         if (document.getElementById('room_id_hidden') != null && document.getElementById('room_id_hidden').value == json_.RESPONSE[i].roomId) {
                            selectRole.append("<option selected value=" + json_.RESPONSE[i].roomId + " >" + json_.RESPONSE[i].roomNo + "</option>")
                        } else {
                            selectRole.append("<option value=" + json_.RESPONSE[i].roomId + " >" + json_.RESPONSE[i].roomNo + "</option>")
                        }
                        }

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//getRoomTypes
function getRoomTypes(id) {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getRoomTypes",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));

            var selectRole = $('#roomTypeId');
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select ---" + "</option>")

             for (i = 0; i < json_.RESPONSE.length; i++) {
                         if (document.getElementById('roomtype_id_hidden') != null && document.getElementById('roomtype_id_hidden').value == json_.RESPONSE[i].rtypeId) {
                            selectRole.append("<option selected value=" + json_.RESPONSE[i].rtypeId + " >" + json_.RESPONSE[i].rtypeName + "</option>")
                        } else {
                            selectRole.append("<option value=" + json_.RESPONSE[i].rtypeId + " >" + json_.RESPONSE[i].rtypeName + "</option>")
                        }
                        }

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//getGenders
function getGenders() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getGenders",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            var selectRole = $('#gender'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                selectRole.append("<option value=" + json_.RESPONSE[i].genderId + " >" + json_.RESPONSE[i].genderName + "</option>")
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

function getGendersUpdate() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getGenders",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            var selectRole = $('#gender'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")




            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('gid') != null && document.getElementById('gid') //hotel_type_hidden
                    .value == json_.RESPONSE[i].genderId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].genderId + " >" + json_.RESPONSE[i].genderName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].genderId + " >" + json_.RESPONSE[i].genderName + "</option>")
                }

            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

//getClass
function getClass() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getClass",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#class_'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                selectRole.append("<option value=" + json_.RESPONSE[i].classId + " >" + json_.RESPONSE[i].className + "</option>")
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

function getClassUpdate() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getClass",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#class_'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                if (document.getElementById('cid') != null && document.getElementById('cid')
                    .value == json_.RESPONSE[i].classId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].classId + " >" + json_.RESPONSE[i].className + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].classId + " >" + json_.RESPONSE[i].className + "</option>")
                }

            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}


function getSection() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getSection",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#section'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                if (document.getElementById('sid') != null && document.getElementById('sid')
                    .value == json_.RESPONSE[i].seactionId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].seactionId + " >" + json_.RESPONSE[i].sectionName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].seactionId + " >" + json_.RESPONSE[i].sectionName + "</option>")
                }


            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

function getSectionUpdate() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getSection",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#section'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('sid') != null && document.getElementById('sid')
                    .value == json_.RESPONSE[i].seactionId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].seactionId + " >" + json_.RESPONSE[i].sectionName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].seactionId + " >" + json_.RESPONSE[i].sectionName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

//getay
function getay() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getay",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#acadamic_year'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                if (document.getElementById('ayid') != null && document.getElementById('ayid')
                    .value == json_.RESPONSE[i].ayId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].ayId + " >" + json_.RESPONSE[i].ayName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].ayId + " >" + json_.RESPONSE[i].ayName + "</option>")
                }

            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

//getes
function getes() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getes",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#economic_status'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                if (document.getElementById('esid') != null && document.getElementById('esid')
                    .value == json_.RESPONSE[i].esId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].esId + " >" + json_.RESPONSE[i].esName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].esId + " >" + json_.RESPONSE[i].esName + "</option>")
                }

            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

//getyn_cwsnstatus();
function getyn_cwsnstatus() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getyn_cwsnstatus",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#cwsnstatus'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {


                if (document.getElementById('cwsn_') != null && document.getElementById('cwsn_')
                    .value == json_.RESPONSE[i].ynId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].ynId + " >" + json_.RESPONSE[i].ynName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].ynId + " >" + json_.RESPONSE[i].ynName + "</option>")
                }

            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}
// getyn_hpbonafied();
function getyn_hpbonafied() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getyn_cwsnstatus",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#hpbonafied'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {


                if (document.getElementById('bonafide_') != null && document.getElementById('bonafide_')
                    .value == json_.RESPONSE[i].ynId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].ynId + " >" + json_.RESPONSE[i].ynName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].ynId + " >" + json_.RESPONSE[i].ynName + "</option>")
                }

            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

//getyn_vocational
function getyn_vocational() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getyn_cwsnstatus",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#vocational'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {


                if (document.getElementById('vocational_') != null && document.getElementById('vocational_')
                    .value == json_.RESPONSE[i].ynId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].ynId + " >" + json_.RESPONSE[i].ynName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].ynId + " >" + json_.RESPONSE[i].ynName + "</option>")
                }

            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

//getcaste
function getcaste() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getcaste",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#caste'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {


                if (document.getElementById('caste_') != null && document.getElementById('caste_')
                    .value == json_.RESPONSE[i].casteId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].casteId + " >" + json_.RESPONSE[i].casteName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].casteId + " >" + json_.RESPONSE[i].casteName + "</option>")
                }

            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}




//getreligion
function getreligion() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getreligion",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#subcaste'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                if (document.getElementById('subcaste_') != null && document.getElementById('subcaste_')
                    .value == json_.RESPONSE[i].religionId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].religionId + " >" + json_.RESPONSE[i].religionName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].religionId + " >" + json_.RESPONSE[i].religionName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

//getmodules
function getmodules() {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getModules",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#modules'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                selectRole.append("<option value=" + json_.RESPONSE[i].moduleId + " >" + json_.RESPONSE[i].moduleName + "</option>")
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

function getModulesUpdated(mid) {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getModules",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#modules'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('mid') != null && document.getElementById('mid')
                    .value == json_.RESPONSE[i].moduleId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].moduleId + " >" + json_.RESPONSE[i].moduleName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].moduleId + " >" + json_.RESPONSE[i].moduleName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}


function getRolesUpdated(rid) {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getRoles",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);

            console.log(json_);
            var selectRole = $('#roles'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('rid') != null && document.getElementById('rid')
                    .value == json_.RESPONSE[i].role_id) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].role_id + " >" + json_.RESPONSE[i].role_name + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].role_id + " >" + json_.RESPONSE[i].role_name + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}




function getdistricts() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getDistricts",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#district'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select District---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('did') != null && document.getElementById('did')
                    .value == json_.RESPONSE[i].districtId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].districtId + " >" + json_.RESPONSE[i].districtName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].districtId + " >" + json_.RESPONSE[i].districtName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}



function getStates() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getStates",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#state'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select States---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('did') != null && document.getElementById('did')
                    .value == json_.RESPONSE[i].districtId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].stateID + " >" + json_.RESPONSE[i].stateName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].stateID + " >" + json_.RESPONSE[i].stateName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}




function getArea() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getArea",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#area'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select States---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('did') != null && document.getElementById('did')
                    .value == json_.RESPONSE[i].areaID) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].areaId + " >" + json_.RESPONSE[i].areaName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].areaId + " >" + json_.RESPONSE[i].areaName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//areaupdate
function areaupdate() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getArea",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#area'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select States---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('aid') != null && document.getElementById('aid')
                    .value == json_.RESPONSE[i].areaId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].areaId + " >" + json_.RESPONSE[i].areaName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].areaId + " >" + json_.RESPONSE[i].areaName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}
//getSchoolSeason
function getSchoolType() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getSchoolType",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#schoolType'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select States---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('did') != null && document.getElementById('did')
                    .value == json_.RESPONSE[i].schooltypeId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].schooltypeId + " >" + json_.RESPONSE[i].schooltypeName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].schooltypeId + " >" + json_.RESPONSE[i].schooltypeName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//getSchoolSeason
function getSchoolSeason() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getSchoolSeason",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#schoolSeason'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select States---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('did') != null && document.getElementById('did')
                    .value == json_.RESPONSE[i].seasonId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].seasonId + " >" + json_.RESPONSE[i].seasonName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].seasonId + " >" + json_.RESPONSE[i].seasonName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//getseason_update
function getseason_update() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getSchoolSeason",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#schoolSeason'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select States---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('season') != null && document.getElementById('season')
                    .value == json_.RESPONSE[i].seasonId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].seasonId + " >" + json_.RESPONSE[i].seasonName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].seasonId + " >" + json_.RESPONSE[i].seasonName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//getFacilities
function getFacilities() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getfacility",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#facilities'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('did') != null && document.getElementById('did')
                    .value == json_.RESPONSE[i].facilityId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].facilityId + " >" + json_.RESPONSE[i].facilityName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].facilityId + " >" + json_.RESPONSE[i].facilityName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}


//getDepartments
function getDepartments() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getDepartments",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#department'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('did') != null && document.getElementById('did')
                    .value == json_.RESPONSE[i].departmentId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].departmentId + " >" + json_.RESPONSE[i].departmentName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].departmentId + " >" + json_.RESPONSE[i].departmentName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//deptUpdate
function deptUpdate() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getDepartments",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#department'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('deptid') != null && document.getElementById('deptid')
                    .value == json_.RESPONSE[i].departmentId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].departmentId + " >" + json_.RESPONSE[i].departmentName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].departmentId + " >" + json_.RESPONSE[i].departmentName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//gethigher
function gethigher(id) {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/gethigher",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#elementryHigher'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select ---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                selectRole.append("<option value=" + json_.RESPONSE[i].elementaryId + " >" + json_.RESPONSE[i].elementaryName + "</option>")


            };

        },
        error: function (data) {
            console.log(data)
        }

    });


}

function gethigherupdate(id) {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/gethigher",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#elementryHigher'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select ---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                if (document.getElementById('highid') != null && document.getElementById('highid')
                    .value == json_.RESPONSE[i].elementaryId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].elementaryId + " >" + json_.RESPONSE[i].elementaryName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].elementaryId + " >" + json_.RESPONSE[i].elementaryName + "</option>")
                }



            };

        },
        error: function (data) {
            console.log(data)
        }

    });


}


function getdepartments() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getDepartments",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#departmentId'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select Departments---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('ddm') != null && document.getElementById('ddm')
                    .value == json_.RESPONSE[i].designationId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].designationId + " >" + json_.RESPONSE[i].designationName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].designationId + " >" + json_.RESPONSE[i].designationName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}


//getBanks
function getBanks() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getsospdo",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#banks'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select Banks---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('baid') != null && document.getElementById('baid')
                    .value == json_.RESPONSE[i].bankId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].bankId + " >" + json_.RESPONSE[i].bankName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].bankId + " >" + json_.RESPONSE[i].bankName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//getbanksUpdate
function getbanksUpdate(baid) {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getsospdo",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#banks'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select Banks---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('baid') != null && document.getElementById('baid')
                    .value == json_.RESPONSE[i].bankId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].bankId + " >" + json_.RESPONSE[i].bankName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].bankId + " >" + json_.RESPONSE[i].bankName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}



function getStatesUpdate() {
    $.ajax({
        type: "GET",
        url: formURL_Two + "/ajax/getStates",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#state'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select States---" + "</option>")



            for (i = 0; i < json_.RESPONSE.length; i++) {
                console.log("====" + document.getElementById('sid')
                    .value);
                console.log(json_.RESPONSE[i].stateID);
                if (document.getElementById('sid') != null && document.getElementById('sid')
                    .value == json_.RESPONSE[i].stateID) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].stateID + " >" + json_.RESPONSE[i].stateName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].stateID + " >" + json_.RESPONSE[i].stateName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}




//getdistrictsUpdate
function getdistrictsUpdate(id) {
    $.ajax({
        type: "GET",
        url: formURL_Two + "/ajax/getDistrictViaState",
        data: {
            "id": id
        },

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#district'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select Districts---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                console.log("====" + document.getElementById('did')
                    .value);
                console.log(json_.RESPONSE[i].stateID);
                if (document.getElementById('did') != null && document.getElementById('did')
                    .value == json_.RESPONSE[i].districtId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].districtId + " >" + json_.RESPONSE[i].districtName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].districtId + " >" + json_.RESPONSE[i].districtName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//getdistrictsUpdate
function getdistrictsViaDistrictIDUpdate(id) {

    $.ajax({
        type: "GET",
        url: formURL_Two + "/ajax/getDistrictViaDIT",
        data: {
            "id": id
        },

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#districts'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select Districts---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                console.log("====" + document.getElementById('did')
                    .value);
                console.log(json_.RESPONSE[i].stateID);
                if (document.getElementById('did') != null && document.getElementById('did')
                    .value == json_.RESPONSE[i].districtId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].districtId + " >" + json_.RESPONSE[i].districtName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].districtId + " >" + json_.RESPONSE[i].districtName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}


function getJobToleViaSector(id) {

    $.ajax({
        type: "GET",
        url: formURL_Two + "/ajax/getJobToleViaSector",
        data: {
            "id": id
        },

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#jobRole'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('jobRole_') != null && document.getElementById('jobRole_').value == json_.RESPONSE[i].jobRoleId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].jobRoleId + " >" + json_.RESPONSE[i].jobRoleName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].jobRoleId + " >" + json_.RESPONSE[i].jobRoleName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}



function getVehicleType() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getVehicleType",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#vehicletype'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('vid') != null && document.getElementById('vid')
                    .value == json_.RESPONSE[i].vehicleId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].vehicleId + " >" + json_.RESPONSE[i].vehicleName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].vehicleId + " >" + json_.RESPONSE[i].vehicleName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}



function getBlocksViaDistrict(id) {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getBlocks",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#block'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select Block ---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                selectRole.append("<option value=" + json_.RESPONSE[i].blockId + " >" + json_.RESPONSE[i].blockName + "</option>")


            };

        },
        error: function (data) {
            console.log(data)
        }

    });


}


//getblocksUpdate sexx
function getblocksUpdate(id) {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getBlocks",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#block'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select Block ---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('bid') != null && document.getElementById('bid')
                    .value == json_.RESPONSE[i].blockId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].blockId + " >" + json_.RESPONSE[i].blockName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].blockId + " >" + json_.RESPONSE[i].blockName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//getEducationalBlocksViaDistrict
function getEducationalBlocksViaDistrict(id) {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getEducationalBlocks",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#educationalBlock'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "--- Select ---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                selectRole.append("<option value=" + json_.RESPONSE[i].blockId + " >" + json_.RESPONSE[i].blockName + "</option>")


            };

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//getedublocksUpdate
function getedublocksUpdate(id) {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getEducationalBlocks",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#educationalBlock'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "--- Select ---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                if (document.getElementById('ebid') != null && document.getElementById('ebid')
                    .value == json_.RESPONSE[i].blockId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].blockId + " >" + json_.RESPONSE[i].blockName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].blockId + " >" + json_.RESPONSE[i].blockName + "</option>")
                }


            };

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//getConstituency
function getConstituency(id) {

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getConstituency",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#constituency'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "--- Select ---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                selectRole.append("<option value=" + json_.RESPONSE[i].acId + " >" + json_.RESPONSE[i].acName + "</option>")


            };

        },
        error: function (data) {
            console.log(data)
        }

    });


}

//getconstituencyUpdate
function getconstituencyUpdate(id) {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getConstituency",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#constituency'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "--- Select ---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                if (document.getElementById('cid') != null && document.getElementById('cid')
                    .value == json_.RESPONSE[i].acId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].acId + " >" + json_.RESPONSE[i].acName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].acId + " >" + json_.RESPONSE[i].acName + "</option>")
                }



            };

        },
        error: function (data) {
            console.log(data)
        }

    });


}


//etDistrictsViaStates(this.value)
function getDistrictsViaStates(id) {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getDistrictViaState",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#district'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select District ---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {

                selectRole.append("<option value=" + json_.RESPONSE[i].districtId + " >" + json_.RESPONSE[i].districtName + "</option>")


            };

        },
        error: function (data) {
            console.log(data)
        }

    });


}


//getAcViaDistrictId
function getAcViaDistrictId(id) {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getAcViaDistrictId",
        data: {
            "id": id
        },
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            // var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#acId'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('acid') != null && document.getElementById('acid')
                    .value == json_.RESPONSE[i].acId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].acId + " >" + json_.RESPONSE[i].acName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].acId + " >" + json_.RESPONSE[i].acName + "</option>")
                }

            };

        },
        error: function (data) {
            console.log(data)
        }

    });


}




function getUsers(id) {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getUsers",
        data: {
            "id": id
        },
        success: function (data) {
            var json_ = JSON.parse(JSON.stringify(data));
            console.log(json_);
            var selectRole = $('#users');
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select User ---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('uid') != null && document.getElementById('uid')
                    .value == json_.RESPONSE[i].userId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].userId + " >" + json_.RESPONSE[i].username + "</option>");
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].userId + " >" + json_.RESPONSE[i].username + "</option>")
                }
            };

        },
        error: function (data) {
            console.log(data)
        }

    });


}


function getGenderWiseStudents() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getGenderWiseStudents",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            setChartgetGenderWiseStudents(json_.RESPONSE);
        },
        error: function (data) {
            console.log(data)
        }

    });
}


function getReligionWiseStudents() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getReligionWiseStudents",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            setChartgetReligionWiseStudents(json_.RESPONSE);
        },
        error: function (data) {
            console.log(data)
        }

    });
}


function getEconomicWiseStudents() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getEconomicWiseStudents",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            setChartgetEconomicWiseStudents(json_.RESPONSE);
        },
        error: function (data) {
            console.log(data)
        }

    });
}




//School
function getGenderWiseStudentsSchool() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getGenderWiseStudentsSchool",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            setChartgetGenderWiseStudents(json_.RESPONSE);
        },
        error: function (data) {
            console.log(data)
        }

    });
}


function getReligionWiseStudentsSchool() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getReligionWiseStudentsSchool",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            setChartgetReligionWiseStudents(json_.RESPONSE);
        },
        error: function (data) {
            console.log(data)
        }

    });
}


function getEconomicWiseStudentsSchool() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getEconomicWiseStudentsSchool",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            setChartgetEconomicWiseStudents(json_.RESPONSE);
        },
        error: function (data) {
            console.log(data)
        }

    });
}


function getChartgetCategoryWiseStudents() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/setChartgetCategoryWiseStudents",
        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            setChartgetCategoryWiseStudents(json_.RESPONSE);
        },
        error: function (data) {
            console.log(data)
        }

    });
}

//getSchools
function getSchools(state, district, educationalblock) {

    console.log("state:- " + state);
    console.log("district:- " + district);
    console.log("educationalblock:- " + educationalblock );

    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getSchool",
        data: {

            "state": state,
            "district": district,
            "educationalblock": educationalblock
        },
        success: function (data) {
            var json_ = JSON.parse(JSON.stringify(data));
            var id_ = "#school";
            var selectRole = $(id_);
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Please Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('schoolId') != null && document.getElementById('schoolId')
                    .value == json_.RESPONSE[i].schoolId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].schoolId + " >" + json_.RESPONSE[i].schoolName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].schoolId + " >" + json_.RESPONSE[i].schoolName + "</option>")
                }

            };

        },
        error: function (data) {
            console.log(data)
        }

    });
}


// New Functions
function getTeacherType() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getTeacherType",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#teacherType'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('teacher') != null && document.getElementById('teacher')
                    .value == json_.RESPONSE[i].ttypeId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].ttypeId + " >" + json_.RESPONSE[i].ttypeName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].ttypeId + " >" + json_.RESPONSE[i].ttypeName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

function getCompany() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getCompany",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#Company'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('comp') != null && document.getElementById('comp')
                    .value == json_.RESPONSE[i].companyId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].companyId + " >" + json_.RESPONSE[i].companyName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].companyId + " >" + json_.RESPONSE[i].companyName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

//getCourses();
function getCourses() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getCourses",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#course_'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('co') != null && document.getElementById('co').value == json_.RESPONSE[i].courseId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].courseId + " >" + json_.RESPONSE[i].courseName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].courseId + " >" + json_.RESPONSE[i].courseName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

//Get Activities
function getActivities() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getactivities",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#activities_'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('activity_') != null && document.getElementById('activity_').value == json_.RESPONSE[i].activitiesId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].activitiesId + " >" + json_.RESPONSE[i].activitiesName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].activitiesId + " >" + json_.RESPONSE[i].activitiesName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

function getCompany_vtp() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getCompany",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#Company_vtp'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('company_vtp') != null && document.getElementById('company_vtp')
                    .value == json_.RESPONSE[i].companyId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].companyId + " >" + json_.RESPONSE[i].companyName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].companyId + " >" + json_.RESPONSE[i].companyName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}


function getSector() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getSector",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#Sector'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('sec') != null && document.getElementById('sec')
                    .value == json_.RESPONSE[i].sectorId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].sectorId + " >" + json_.RESPONSE[i].sectorName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].sectorId + " >" + json_.RESPONSE[i].sectorName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

 function getSector_vtp() {
     $.ajax({
         type: "GET",
         url: formURL + "/ajax/getSector",

         success: function (data) {
             //Tomcat
             var json_ = JSON.parse(JSON.stringify(data));
             //Jboss
             //var json_ = JSON.parse(data);
             console.log(json_);
             var selectRole = $('#Sector_vtp'); // the state select element
             selectRole.find('option')
                 .remove();
             selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
             for (i = 0; i < json_.RESPONSE.length; i++) {
                 if (document.getElementById('sec_vtp') != null && document.getElementById('sec_vtp')
                     .value == json_.RESPONSE[i].sectorId) {
                     selectRole.append("<option selected value=" + json_.RESPONSE[i].sectorId + " >" + json_.RESPONSE[i].sectorName + "</option>")
                 } else {
                     selectRole.append("<option value=" + json_.RESPONSE[i].sectorId + " >" + json_.RESPONSE[i].sectorName + "</option>")
                 }
             }

         },
         error: function (data) {
             console.log(data)
         }

     });
 }

function getPhases() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getPhases",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#phase'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('phas') != null && document.getElementById('phas')
                    .value == json_.RESPONSE[i].phaseId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].phaseId + " >" + json_.RESPONSE[i].phaseName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].phaseId + " >" + json_.RESPONSE[i].phaseName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

function getPhases_vtp() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getPhases",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#phase_vtp'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('phas_vtp') != null && document.getElementById('phas_vtp')
                    .value == json_.RESPONSE[i].phaseId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].phaseId + " >" + json_.RESPONSE[i].phaseName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].phaseId + " >" + json_.RESPONSE[i].phaseName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

function getNaturePosting() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getNaturePosting",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#natureOfPosting'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('natureposting') != null && document.getElementById('natureposting')
                    .value == json_.RESPONSE[i].postingId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].postingId + " >" + json_.RESPONSE[i].postingName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].postingId + " >" + json_.RESPONSE[i].postingName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}



function getSubjects() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getSubjects",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#subject'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('subject_') != null && document.getElementById('subject_')
                    .value == json_.RESPONSE[i].subjectID) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].subjectID + " >" + json_.RESPONSE[i].subjectName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].subjectID + " >" + json_.RESPONSE[i].subjectName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}


function getQualification() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getQualification",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#qualification'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('qualification_') != null && document.getElementById('qualification_').value == json_.RESPONSE[i].qualificationId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].qualificationId + " >" + json_.RESPONSE[i].qualificationName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].qualificationId + " >" + json_.RESPONSE[i].qualificationName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}


function getProQualification() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getProQualification",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#pro_qualification'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('pro_qualification_') != null && document.getElementById('pro_qualification_')
                    .value == json_.RESPONSE[i].proqualificationId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].proqualificationId + " >" + json_.RESPONSE[i].proqualificationName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].proqualificationId + " >" + json_.RESPONSE[i].proqualificationName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}



function getdisability() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getdisability",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#disability'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('disability_') != null && document.getElementById('disability_')
                    .value == json_.RESPONSE[i].disabilityId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].disabilityId + " >" + json_.RESPONSE[i].Name + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].disabilityId + " >" + json_.RESPONSE[i].disabilityName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}

//getbg
function getbg() {
    $.ajax({
        type: "GET",
        url: formURL + "/ajax/getbg",

        success: function (data) {
            //Tomcat
            var json_ = JSON.parse(JSON.stringify(data));
            //Jboss
            //var json_ = JSON.parse(data);
            console.log(json_);
            var selectRole = $('#blood_group'); // the state select element
            selectRole.find('option')
                .remove();
            selectRole.append("<option value=" + 0 + " >" + "---Select---" + "</option>")
            for (i = 0; i < json_.RESPONSE.length; i++) {
                if (document.getElementById('blood_group_') != null && document.getElementById('blood_group_')
                    .value == json_.RESPONSE[i].bgId) {
                    selectRole.append("<option selected value=" + json_.RESPONSE[i].bgId + " >" + json_.RESPONSE[i].bgName + "</option>")
                } else {
                    selectRole.append("<option value=" + json_.RESPONSE[i].bgId + " >" + json_.RESPONSE[i].bgName + "</option>")
                }
            }

        },
        error: function (data) {
            console.log(data)
        }

    });
}