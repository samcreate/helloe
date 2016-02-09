import axios from 'axios';



function getJob (id) {
	return axios.get(`https://api.greenhouse.io/v1/boards/elephantcareers/embed/job?id=${id}`);
}


function getDepartments () {
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
	helper.getJob = getJob;
export default helper;


