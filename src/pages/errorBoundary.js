"use client";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: "" };
  }
  static getDerivedStateFromError(error) {
    console.log("abe tale",{error})
    return { hasError: true, errorInfo: error.message };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-100 min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <div className="bg-red-500 rounded-full shadow-lg mb-4 p-4">
            <h2 className="flex justify-center align-center ">Oops, there is an error! Try again?</h2>
            <p className="font-bold mx-4">Error : {this.state.errorInfo}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
