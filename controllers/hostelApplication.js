import hostelApplicationModel from "../models/hostelApplication.js";
// import { deleteApplications } from './hostelApplication';

export const getApplications = async (req, res) => {
    try {
        const hostelApplications = await hostelApplicationModel.find();
        res.json(hostelApplications);
    } catch (error) {
        console.log("Not found any data.");
    }
};

export const createApplication = async (req, res) => {
    const studentName = req.body.studentName;
    const studentNameInStringFormat = studentName.toString();

    const registrationNumber = req.body.registrationNumber;
    const registrationNumberInString = registrationNumber.toString();

    const newApplicant = new hostelApplicationModel({
        studentName: studentNameInStringFormat,
        registrationNumber: registrationNumberInString
    });

    try {
        await newApplicant.save();
        res.json(newApplicant);
    } catch (error) {
        console.log("Not saved...");
    }
}

    
//     export const deleteApplication = async (req, res) => {
//         const id = req.params.id ;
    
//         let deleteApplication;
//         try {
//             deleteApplication = await hostelApplicationModel.findByIdAndDelete(id);
//             res.json(deleteApplication)
//         } catch (error) {
//             console.log("Not deleted .... ");
//         }
    
//     }
// }
    
//     export const updateApplication = async(req, res) => {
//         const registrationNumber = req.params.regNmbr;
    
//         const studentName = req.body.studentName
    
//         console.log(studentName, registrationNumber);
    
//         let updateApplication
//         try {
//             updateApplication = await hostelApplicationModel.findOneAndUpdate(
//                 {registrationNumber},
//                 {studentName},
//                 {new: true}
//             )
//             res.json(updateApplication)
//         } catch (error) {
//             console.log("Couldn't Be Updated Yet!!");    
//         }
//     }
// }
// module.exports
