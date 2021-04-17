import { v4 as uuidv4 } from 'uuid';


function Project(title, description) {
  this.projectId = uuidv4();
  this.projectTitle = title;
  this.projectDescription = description;
  this.projectTask = [];
}

export default Project;
