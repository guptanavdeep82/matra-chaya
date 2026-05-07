import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';

export default function DashboardPage() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const studentData = localStorage.getItem('loggedInStudent');
    if (studentData) {
      setStudent(JSON.parse(studentData));
    } else {
      navigate('/login');
    }
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInStudent');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return <StudentDashboard student={student} onLogout={handleLogout} />;
}
