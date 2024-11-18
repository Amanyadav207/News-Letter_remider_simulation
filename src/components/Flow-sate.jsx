import { useState } from 'react';
import { Circle, ArrowRight, Mail, Clock, CheckCircle } from 'lucide-react';

const FlowSimulation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [flowComplete, setFlowComplete] = useState(false);

  const steps = [
    { id: 0, name: 'Start', icon: () => <Circle size={24} />, description: 'Initialize flow' },
    { id: 1, name: 'First Reminder', icon: () => <Mail size={24} />, description: 'Send first reminder email' },
    { id: 2, name: 'Wait Period 1', icon: () => <Clock size={24} />, description: 'Wait for 3 days' },
    { id: 3, name: 'First Check', icon: () => <CheckCircle size={24} />, description: 'Check renewal status' },
    { id: 4, name: 'Second Reminder', icon: () => <Mail size={24} />, description: 'Send second reminder' },
    { id: 5, name: 'Wait Period 2', icon: () => <Clock size={24} />, description: 'Wait for 2 days' },
    { id: 6, name: 'Final Check', icon: () => <CheckCircle size={24} />, description: 'Final renewal check' },
  ];

  const addLog = (step, message, status) => {
    const timestamp = new Date().toISOString();
    setLogs((prev) => [...prev, { step, message, status, timestamp }]);
  };

  const simulateRenewal = () => Math.random() > 0.5;

  const runFlow = async () => {
    setIsRunning(true);
    setLogs([]);

    // Step 1: First Reminder
    setCurrentStep(1);
    addLog('first_reminder', 'Sending first reminder email...', 'running');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    addLog('first_reminder', 'First reminder sent successfully', 'completed');

    // Step 2: Wait Period 1
    setCurrentStep(2);
    addLog('wait_1', 'Waiting for 3 days...', 'running');
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulating wait time
    addLog('wait_1', 'Wait period completed', 'completed');

    // Step 3: First Check
    setCurrentStep(3);
    addLog('check_1', 'Checking renewal status...', 'running');
    const firstRenewal = simulateRenewal();
    if (firstRenewal) {
      addLog('check_1', 'User has renewed! Sending thank you email...', 'completed');
      setCurrentStep(7);
      setFlowComplete(true);
      setIsRunning(false);
      return;
    }
    addLog('check_1', 'User has not renewed', 'completed');

    // Step 4: Second Reminder
    setCurrentStep(4);
    addLog('second_reminder', 'Sending second reminder email...', 'running');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    addLog('second_reminder', 'Second reminder sent successfully', 'completed');

    // Step 5: Wait Period 2
    setCurrentStep(5);
    addLog('wait_2', 'Waiting for 2 days...', 'running');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    addLog('wait_2', 'Wait period completed', 'completed');

    // Step 6: Final Check
    setCurrentStep(6);
    addLog('final_check', 'Performing final renewal check...', 'running');
    const finalRenewal = simulateRenewal();
    if (finalRenewal) {
      addLog('final_check', 'User has renewed! Sending thank you email...', 'completed');
    } else {
      addLog('final_check', 'User did not renew. No further action needed.', 'completed');
    }

    setFlowComplete(true);
    setIsRunning(false);
  };

  const resetFlow = () => {
    setCurrentStep(0);
    setLogs([]);
    setFlowComplete(false);
    setIsRunning(false);
  };

  const getStatusColor = (stepId) => {
    if (currentStep === stepId) return 'text-blue-600 animate-pulse';
    if (currentStep > stepId) return 'text-green-600';
    return 'text-gray-400';
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Newsletter Subscription Renewal Flow</h1>
        <div className="flex items-center justify-between mb-12 overflow-x-auto p-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex flex-col items-center ${getStatusColor(step.id)}`}>
                <div className="relative">
                  {step.icon()}
                  {currentStep > step.id && (
                    <CheckCircle className="absolute -top-2 -right-2 text-green-500 bg-white rounded-full" size={16} />
                  )}
                </div>
                <span className="text-sm mt-2 font-medium whitespace-nowrap">{step.name}</span>
                <span className="text-xs mt-1 text-gray-500 whitespace-nowrap">{step.description}</span>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className={`mx-6 ${currentStep > step.id ? 'text-green-600' : 'text-gray-400'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="mb-8 flex justify-center">
          {!isRunning && !flowComplete && (
            <button
              onClick={runFlow}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Flow
            </button>
          )}
          {flowComplete && (
            <button
              onClick={resetFlow}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Reset Flow
            </button>
          )}
        </div>
        <div className="border rounded-lg p-4 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Flow Logs</h2>
          <div className="h-64 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="text-sm mb-2 p-2 bg-white rounded shadow">
                <span className="text-gray-500">{new Date(log.timestamp).toLocaleTimeString()}</span>
                <span
                  className={`ml-2 ${
                    log.status === 'completed'
                      ? 'text-green-600'
                      : log.status === 'running'
                      ? 'text-blue-600'
                      : 'text-gray-600'
                  }`}
                >
                  {log.message}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowSimulation;
