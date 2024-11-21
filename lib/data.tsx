export const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }
  
  export const caseData = [
    { caseNo: 'INV001', name: 'Mukesh Raj', caseType: 'Lorem Ipsum', underSection: '123A-843B-242D', date: '2023/11/04', status: 'Approved' },
    { caseNo: 'INV002', name: 'Ramesh Mahajan', caseType: 'Lorem Ipsum', underSection: '123A-843B-242D', date: '2023/11/04', status: 'Pending' },
    { caseNo: 'INV003', name: 'Rupesh Raut', caseType: 'Lorem Ipsum', underSection: '123A-843B-242D', date: '2023/11/04', status: 'Rejected' },
    { caseNo: 'INV004', name: 'Mahesh Daf', caseType: 'Lorem Ipsum', underSection: '123A-843B-242D', date: '2023/11/04', status: 'Pending' },
    { caseNo: 'INV005', name: 'Raj Sheikh', caseType: 'Lorem Ipsum', underSection: '123A-843B-242D', date: '2023/11/04', status: 'Pending' },
  ]
  
  export const lawyersData = [
    { profileImage: '/placeholder.svg', barNo: '8618238', name: 'K.D Pathak', domain: 'UTPx', region: 'Wardha', contact: '9427XXXXX' },
    { profileImage: '/placeholder.svg', barNo: '8618238', name: 'Jolly L. Lawrencx', domain: 'Domestic Violence', region: 'Nagpur', contact: '9427XXXXX' },
    { profileImage: '/placeholder.svg', barNo: '8618238', name: 'Lorem Ipsum', domain: 'Lorem Ipsum', region: 'Pune', contact: '9427XXXXX' },
    { profileImage: '/placeholder.svg', barNo: '8618238', name: 'Thomas Shelby', domain: 'Lorem Ipsum', region: 'Mumbai', contact: '9427XXXXX' },
    { profileImage: '/placeholder.svg', barNo: '8618238', name: 'Sayali Pimpalkar', domain: 'Lorem Ipsum', region: 'Nashik', contact: '9427XXXXX' },
  ]