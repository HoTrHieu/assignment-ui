import { useQuery, useMutation } from 'react-query'
import axios from "axios";

const apiUrl = {
  receiveCallback: `/api/receive-callback`,
  submitAction: '/api/submit-action',
  submitPhone: '/api/submit-phone',
  submitMoreInfo: 'api/submit-more-info',
}

const axiosClient = axios.create({
  headers: {
      'Content-Type': 'application/json',
  }
})

const useGetReceiveData = () => {
  const url = apiUrl.receiveCallback;
  const getReceiveData =  useQuery(
    'receive-callback', 
    () => axiosClient.get(url),
    {
      cacheTime: 5000,
      refetchOnWindowFocus: false,
    })
  return getReceiveData;
};




//data submit 
/*
  {
    type "callNow" // callLater, chat, schedule
    firstName,
    lastName,
    email,
    phone,
    website,
    companySize,
  }
*/
const useSubmitAction = (callBack) => {
  let dataSubmit = null;

  const {mutate, isLoading} = useMutation({
    mutationFn: (data) => {
      dataSubmit = data;
      return axios.post(apiUrl.submitAction, data);
    },
    onSuccess: (dataSuccess) => {
      const { type } = dataSubmit || {};
      if(["callNow", "callLater"].includes(type)) {
        callBack && callBack({
          page: "moreInfo"
        });
      }
      if(type === "chat") {
        callBack && callBack({
          page: "yourNumber"
        }); 
      }
      if(type === "schedule") {
        callBack && callBack({
          page: "success"
        }); 
      }
      dataSubmit = null; 
    },
    onError: (error) => {
      callBack && callBack({
        page: "error"
      }); 
    }
  })

  return {
    submitAction: mutate,
    isLoading,
  }
}



const useSubmitPhone = (callBack) => {

  const {mutate, isLoading} = useMutation({
    mutationFn: (data) => {
      return axios.post(apiUrl.submitPhone, data);
    },
    onSuccess: (dataSuccess) => {
      console.log("dataSuccess", callBack);
      callBack && callBack({
        page: "success"
      }); 
    },
    onError: (error) => {
      callBack && callBack({
        page: "error"
      });   
    }
  })

  return {
    submitPhone: mutate,
    isLoading,
  }
}



const useSubmitMoreInfo = (callBack) => {

  const {mutate, isLoading} = useMutation({
    mutationFn: (data) => {
      return axios.post(apiUrl.submitPhone, data);
    },
    onSuccess: (dataSuccess) => {
      callBack && callBack({
        page: "success"
      });  
    },
    onError: (error) => {
      callBack && callBack({
        page: "error"
      }); 
    }
  })

  return {
    submitMoreInfo: mutate,
    isLoading,
  }
}

export {
  useSubmitAction,
  useSubmitPhone,
  useSubmitMoreInfo,
  useGetReceiveData,
}