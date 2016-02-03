import axios from 'axios';


function getDepartments () {
	return axios.get('https://api.greenhouse.io/v1/boards/elephantcareers/embed/departments')
	.then((arr =>{

		return new Promise((resolve, reject) => {
			
			let departments = [];
			for(let department of arr.data.departments){
				if(department.jobs.length > 0){
					departments.push(department);
				}
			}
			resolve(departments);
		});

	}));

}
function getDepartmentJobs (id) {
	console.log('getdeparmetnjobs',id)
	return axios.get(`https://api.greenhouse.io/v1/boards/elephantcareers/embed/department?id=${id}`);
}
function getJob (id) {
	return axios.get(`https://api.greenhouse.io/v1/boards/elephantcareers/embed/job?id=${id}`);
}


function getDepartmentsV2 () {
	return axios.get('https://api.greenhouse.io/v1/boards/elephantcareers/embed/departments')
	.then((arr =>{

		return new Promise((resolve, reject) => {
			
			const Careers = new Map();
			for(let department of arr.data.departments){
				if(department.jobs.length > 0){
					//console.log(department)
					Careers.set(slugify(department.name), {count: department.jobs.length, jobs: department.jobs, name:department.name});
				}
			}
			resolve(Careers);
		});

	}));

}

function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
 

let helper = {};
	helper.getDepartments = getDepartments;
	helper.getDepartmentJobs = getDepartmentJobs;
	helper.getJob = getJob;
	helper.getDepartmentsV2 = getDepartmentsV2;
export default helper;


