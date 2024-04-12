
/*
window.onclick = e => {
    console.log(e.target.innerText);
}
*/



const sap_btn_show_more = document.querySelector('.btn-sap-show-more');

const mlp_btn_show_more = document.querySelector('.btn-mlp-show-more');

const wdp_btn_show_more = document.querySelector('.btn-wdp-show-more');

const sap_inactive_projects = document.querySelectorAll('.statistical-analysis-projects .project:not(.active)');

const mlp_inactive_projects = document.querySelectorAll('.machine-learning-projects .project:not(.active)');

const wdp_inactive_projects = document.querySelectorAll('.webdev-projects .project:not(.active)');


window.onclick = e => {
    if(e.target.innerText == 'Show more SAP'){
        sap_inactive_projects.forEach(sap_inactive_project => {
            sap_inactive_project.classList.add('show');
        })
    }
    if(e.target.innerText == 'Show less SAP'){
        sap_inactive_projects.forEach(sap_inactive_project => {
            sap_inactive_project.classList.remove('show');
        })
    }

    if(e.target.innerText == 'Show more MLP'){
        mlp_inactive_projects.forEach(mlp_inactive_project => {
            mlp_inactive_project.classList.add('show');
        })
    }
    if(e.target.innerText == 'Show less MLP'){
        mlp_inactive_projects.forEach(mlp_inactive_project => {
            mlp_inactive_project.classList.remove('show');
        })
    }

    if(e.target.innerText == 'Show more WDP'){
        wdp_inactive_projects.forEach(wdp_inactive_project => {
            wdp_inactive_project.classList.add('show');
        })
    }
    if(e.target.innerText == 'Show less WDP'){
        wdp_inactive_projects.forEach(wdp_inactive_project => {
            wdp_inactive_project.classList.remove('show');
        })
    }
}




