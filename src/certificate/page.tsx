"use client";
import "./certificate.css";
import Image from "next/image";

export default function Certificate() {
  return (
    <div
      id="certificate"
      className=" min-h-screen w-full flex flex-col items-center pt-20 px-4"
    >
      <div className="titleCertificate mb-8 md:mb-12">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center"
          style={{ color: "#dfd0b87a" }}
        >
          CERTIFICATES
        </h2>
      </div>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 justify-items-center">
          <div className="certificate-card">
            <Image
              className="certificate-image"
              src="/assets/cloudDicoding.png"
              alt="Cloud Computing Certificate from Dicoding"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="certificate-card">
            <Image
              className="certificate-image"
              src="/assets/webDicoding.png"
              alt="Web Development Certificate from Dicoding"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="certificate-card">
            <Image
              className="certificate-image"
              src="/assets/awsCloudPractitioner.png"
              alt="AWS Cloud Practitioner Certificate"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="certificate-card">
            <Image
              className="certificate-image"
              src="/assets/awsJobRoles.png"
              alt="AWS Job Roles Certificate"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="certificate-card sm:col-span-2 lg:col-span-1">
            <Image
              className="certificate-image"
              src="/assets/infovest.jpg"
              alt="Infovest Certificate"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="certificate-card">
            <Image
              className="certificate-image"
              src="/assets/digitalLearn.png"
              alt="Cloud Computing Certificate from Dicoding"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="certificate-card">
            <Image
              className="certificate-image"
              src="/assets/sertifikatujilevel.png"
              alt="Cloud Computing Certificate from Dicoding"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
