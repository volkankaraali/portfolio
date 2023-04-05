import fs from 'fs';
import path from 'path'

export const getProjectData = async()=>{

  const dataPath = path.join(process.cwd(), '/src/constants/project.json');
  const jsonData = fs.readFileSync(dataPath,"utf8")
  const data = JSON.parse(jsonData);

  return data
}