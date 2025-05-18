import { TCourse } from "./courses.interfaces";
import { Course } from "./courses.model";

const createCourseInDb = async (payload: TCourse) => {
  return await Course.create(payload);
};

const getAllCoursesFromDb = async () => {
  return await Course.find();
};

// const getSingleCourseIDFromDb = async (id: string) => {
//   const course = await Course.findById( id ); 
//   if (!course) {
//     throw new Error("Course not found");
//   }
//   return course;
// }; 

  export const getSingleCourseIDFromDb = async (id: string) => {
  console.log(id)
    
        return await Course.findById(id);
      };
      


const getACourseFromDb = async (slug: string) => {
  const course = await Course.findOne({ slug }); 
  if (!course) {
    throw new Error("Course not found");
  }
  return course;
};


 const updateCourse= async (id: string, payload: TCourse) => {
    return await Course.findByIdAndUpdate(id, payload, { new: true });
  };


const deleteCourse = async (id: string)=>{
return await Course.findByIdAndDelete(id)    

}


  
  


export const CourseServices = {
  createCourseInDb,
  getAllCoursesFromDb,
  getACourseFromDb,updateCourse,deleteCourse, 
  getSingleCourseIDFromDb
};
