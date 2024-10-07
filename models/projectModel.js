const { v4: uuidv4 } = require('uuid')
const { collection, getDocs, addDoc, query, where, doc, getDoc } = require('firebase/firestore');
const db = require('../firebaseConfig.js');
const projectsCollection = collection(db, 'projects');

async function getAllProjects() {
  const projectSnapshot = await getDocs(projectsCollection);
  const projectList = projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return projectList;
}

async function createProject(data) {
  const fechaInicial = new Date();
  const fechaFinal = new Date();
  fechaFinal.setDate(fechaInicial.getDate() + 5);

  const newProject = {
      id: uuidv4(),
      name: data.name,
      description: data.description,
      startDate: data.startDate || fechaInicial.toISOString().split('T')[0],
      endDate: data.endDate || fechaFinal.toISOString().split('T')[0],
      status: data.status,
      budget: data.budget
  };
  const docRef = await addDoc(projectsCollection, newProject);
  return { id: docRef.id, ...newProject };
}

//Buscar por ID de proyecto
/* async function getProjectById(idProject){
  const kiu = query(projectsCollection, where('id', '==', idProject));
  const projectSnapshot = await getDocs(kiu);

  if (projectSnapshot.empty) {
    throw new Error("No se encontró ningún proyecto con ese ID");
  }

  const projectData = projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return projectData;
} */

//Buscar por ID de documento
async function getProjectById(idProject) {
  const docRef = doc(db, 'projects', idProject); // Crear referencia al documento
  const projectSnapshot = await getDoc(docRef); // Obtener el documento directamente

  if (!projectSnapshot.exists()) { // Verificar si el documento existe
    const kiu = query(projectsCollection, where('id', '==', idProject));
    const projectSnapshot2 = await getDocs(kiu);
    
    if (projectSnapshot2.empty) {
      throw new Error("No se encontró ningún proyecto con ese ID");
    }

    const projectData2 = projectSnapshot2.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return projectData2;
  }

  const projectData = { id: projectSnapshot.id, ...projectSnapshot.data() }; // Extraer los datos
  return projectData;
}

module.exports = {
  getAllProjects,
  createProject,
  getProjectById
}