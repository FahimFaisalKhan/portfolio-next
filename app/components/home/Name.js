"use client";
import React from "react";

import Image from "next/image";
import { name } from "@/public/images";
// gsap.registerPlugin();
const Name = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="106.57 324.59 856.44 74.94"
        width={700}
        height={100}
      >
        <path
          className="draw-line"
          d="M311.44 397.456c-1.09-13.823.645-27.248.735-40.718.017-2.658.534-5.323.425-7.969-.143-3.456.763-5.253 4.706-5.173 3.477.07 5.498.89 5.034 4.78-.071.593.081 1.212.151 2.073 9.647-10.019 25.373-11.396 34.242.905 4.988-6.885 11.897-9.156 20.088-8.733 9.677.499 15.41 5.773 15.217 15.44-.246 12.31-1.086 24.612-1.743 36.913-.27 5.07-4.244 3.02-6.83 3.23-3.352.275-3.538-2.005-3.384-4.661.608-10.467 1.08-20.94 1.602-31.412.22-4.428-.471-8.669-5.177-10.326-4.932-1.737-9.832-1.422-13.992 2.454-5.905 5.501-5.44 12.989-6.07 20.002-.55 6.125-.465 12.326-.327 18.486.098 4.367-1.64 5.663-5.943 5.696-4.566.035-4.707-2.276-4.545-5.645.481-9.979.929-19.961 1.18-29.947.178-7.048-1.743-10.216-6.395-11.498-6.031-1.662-12.33.902-15.438 6.39-3.156 5.574-3.14 11.85-3.582 17.956-.397 5.476-.225 10.993-.36 16.49-.159 6.435-.987 6.918-9.594 5.267zM754.717 383.255c-5.955-7.407-11.7-14.528-18.252-22.65-.43 5.74-.919 10.388-1.094 15.046-.226 5.992-.344 11.995-.235 17.989.078 4.328-2.378 4.734-5.8 4.71-3.423-.024-5.933-.447-5.665-4.798.46-7.473.791-14.955 1.05-22.438.467-13.48 1.018-26.963 1.16-40.448.051-4.922 2.37-5.679 6.524-5.744 4.611-.072 5.168 2.33 4.946 5.986a817.368 817.368 0 0 0-.98 20.944c-.056 1.573-.59 3.294.741 5.019 4.501-3.336 7.666-7.825 11.254-11.88a578.544 578.544 0 0 0 12.66-14.815c4.624-5.594 7.593-6.513 15.223-4.326.618 1.83-.947 2.646-1.865 3.678-7.747 8.712-15.4 17.514-23.382 26.006-2.888 3.071-2.37 5.176.068 8.016 8.245 9.607 16.343 19.34 24.454 29.06 1.144 1.372 2.735 2.492 2.996 4.47-6.518 2.999-11.854 1.684-15.87-3.724-2.48-3.342-5.143-6.548-7.933-10.1zM796.39 386.334c-.029 2.3-.043 4.132-.064 5.964-.069 5.914-.511 6.19-6.22 6.048-3.315-.083-4.49-1.573-4.24-4.642 1.755-21.572 2.062-43.206 2.778-64.822.15-4.542 3.277-3.733 5.982-3.89 2.969-.171 5.017.85 4.552 4.248-.948 6.94-.965 13.9-1.001 21.806 8.44-9.13 18.534-9.714 28.968-7.543 8.981 1.87 13.179 7.203 12.96 16.342-.277 11.638-1.2 23.258-1.736 34.89-.236 5.106-4 3.269-6.632 3.52-3.493.332-4.169-1.759-3.865-4.744 1.009-9.929 1.836-19.874 1.815-29.865-.016-7.976-2.718-11.208-10.42-12.714-12.266-2.4-20.83 5.202-21.894 19.488-.383 5.144-.65 10.297-.982 15.914zM261.195 353.783c-14.131-8.266-27.702-.458-28.83 16.29-.516 7.64-.958 15.302-.954 22.954.003 4.256-1.632 5.386-5.62 5.377-4.01-.009-5.338-1.528-5.006-5.37 1.835-21.246 1.998-42.57 2.803-63.862.183-4.834 3.264-4.08 6.197-4.158 3.6-.095 4.692 1.817 4.153 5.109-1.107 6.775-.497 13.622-1.042 21.454 8.073-9.795 18.24-10.125 28.639-8.193 9.327 1.734 13.686 6.989 13.535 16.421-.188 11.807-1.043 23.61-1.836 35.399-.336 4.992-4.468 2.7-7.03 2.996-3.435.398-3.621-2.1-3.395-4.628.904-10.113 1.816-20.225 1.872-30.391.019-3.443-.63-6.628-3.486-9.398zM941.066 342.654c2.134.022 3.807-.047 5.463.085 10.693.854 16.619 6.7 16.487 17.428-.143 11.634-1.053 23.262-1.727 34.887-.294 5.07-4.311 2.91-6.873 3.164-3.07.302-3.254-1.726-3.101-4.271.569-9.464 1.074-18.936 1.304-28.413.2-8.284-2.123-11.986-7.974-13.819-7.542-2.363-15.716.04-19.836 5.76-3.597 4.995-3.999 10.853-4.448 16.644-.514 6.635-.957 13.293-.97 19.942-.009 5.286-3.574 4.058-6.552 4.241-3.506.217-4.281-1.775-3.913-4.74 1.807-14.552 1.697-29.22 2.516-43.83.268-4.773 1.548-6.358 6.34-6.159 5.487.229 3.64 3.897 3.84 7.48 5.34-5.785 11.563-8.565 19.444-8.399zM111.422 325.16c12.774-.119 25.094-.181 37.413-.17 2.62.003 5.479-.375 5.507 3.837.026 3.994-2.072 4.594-5.392 4.532-8.156-.152-16.32.065-24.473-.156-3.958-.107-5.347 1.432-5.179 5.28.204 4.652.149 9.328-.051 13.982-.14 3.24 1.135 4.51 4.34 4.463 6.491-.093 12.985.037 19.478.014 6.849-.023 7.24.47 5.49 8.379-7.75 0-15.693-.011-23.636.003-6.566.012-6.575.025-6.612 6.609-.04 7.159-.29 14.327-.019 21.475.217 5.704-3.525 4.718-6.98 4.964-3.765.269-4.882-1.146-4.72-4.884.933-21.44 2.236-42.872 2.144-64.347-.007-1.723.1-3.397 2.69-3.982zM866.94 349.91c-3.903.959-7.393 1.804-10.95 2.665-1.31-5.177.25-7.849 5.385-8.656 8.6-1.351 17.193-2.291 25.747-.18 7.47 1.843 10.322 5.566 10.176 13.199-.238 12.467-.803 24.928-1.078 37.395-.087 3.953-2.534 4.001-5.387 3.998-2.882-.002-5.426-.1-5.166-4.109.418-6.466.712-12.941 1.014-19.415.085-1.802.013-3.611.013-6.292-8.321 3.494-16.803 4.358-24.185 8.631-3.637 2.106-5.029 5.255-4.234 9.267.852 4.307 4.194 5.813 8.05 6.197 4.468.446 8.937.058 13.544-1.361.92 4.27.083 7.242-4.13 7.718-5.772.651-11.617 1-17.356-.52-5.761-1.526-9.036-5.393-10.124-11.13-1.053-5.551.71-10.165 5.052-13.767 5.588-4.636 12.562-5.875 19.25-7.826 3.343-.976 6.736-1.861 9.953-3.167 3.035-1.231 4.676-3.72 4.333-7.135-.336-3.342-2.75-4.92-5.622-5.58-4.581-1.053-9.243-.806-14.284.068zM445.277 337.38c-.016 6.56-.016 12.672-.016 19.554 8.312 0 16.756-.012 25.2.007 2.403.006 4.732-.012 4.839 3.477.099 3.233-.774 5-4.435 4.925-7.326-.152-14.66.094-21.985-.078-3.41-.08-4.756 1.094-4.792 4.572-.083 7.987-.727 15.974-.656 23.956.055 6.098-4.163 4.21-7.28 4.472-3.747.315-4.275-1.761-4.05-5.035.682-9.957 1.151-19.932 1.536-29.906.436-11.308.798-22.621.96-33.936.047-3.37 1.575-4.385 4.55-4.382 12.16.015 24.319-.007 36.479-.002 2.662 0 4.56.78 4.357 4.022-.188 3.027-1.427 4.416-4.675 4.346-8.492-.182-16.99-.071-25.484-.138-2.61-.021-4.744.347-4.548 4.145zM523.48 353.783c-5.305-6.678-12.27-4.553-18.7-3.987-4.01.353-7.92 1.845-12.093 2.88-.775-4.913.28-7.76 5.272-8.624 8.592-1.486 17.19-2.431 25.745-.389 7.941 1.897 10.765 5.727 10.596 13.92-.25 12.14-.856 24.273-1.06 36.413-.078 4.656-2.999 4.202-6.084 4.351-3.56.172-4.72-1.388-4.49-4.758.44-6.468.739-12.947 1.008-19.424.067-1.625.404-3.324-.638-5.264-6.858 2.189-13.785 4.354-20.673 6.64-1.233.41-2.333 1.27-3.437 2.009-3.214 2.152-4.754 5.078-3.778 8.968.993 3.961 4.037 5.6 7.708 6.066 4.626.587 9.245-.032 14.086-1.17.693 3.93.16 6.94-3.877 7.463-5.931.768-11.949 1.148-17.833-.525-5.693-1.618-9.06-5.474-9.985-11.269-.917-5.737 1.013-10.5 5.658-14.036 5.459-4.156 12.113-5.333 18.47-7.236 3.023-.905 6.125-1.594 9.067-2.71 4.037-1.533 6.208-4.38 5.039-9.318zM197.137 396.705c.273-9.681.71-18.936 1.17-28.648-5.085 2.597-10.107 3.756-15.032 5.218-3.191.948-6.377 1.939-9.208 3.783-3.515 2.289-5.7 5.38-4.517 9.662 1.119 4.052 4.527 5.636 8.418 5.892 3.304.218 6.653.424 9.926-.58 1.238-.38 2.579-.793 3.837.141.422 4.891-2.074 7.034-6.709 7.087-3.83.044-7.679.219-11.491-.057-6.993-.504-12.255-4.749-13.625-10.61-1.632-6.982.757-12.774 7.076-16.697 5.317-3.3 11.376-4.625 17.33-6.204 2.734-.725 5.516-1.35 8.146-2.36 3.437-1.32 6.479-3.561 6-7.64-.507-4.318-4.134-5.856-7.969-6.277-6.194-.68-12.297.036-18.25 1.951-1.54.496-3.01 1.496-5.013.835-1.033-4.089-.35-7.031 4.509-7.986 8.731-1.716 17.512-2.645 26.245-.548 7.941 1.907 11.125 5.765 10.966 13.843-.247 12.476-1.002 24.945-1.693 37.408-.212 3.824-4.034 4.607-10.116 1.787zM627.63 343.234c7.244-.697 14.079-1.343 20.792.404 7.763 2.02 11.015 5.998 10.768 13.984-.386 12.47-1.183 24.928-1.881 37.386-.285 5.077-4.284 2.932-6.85 3.204-2.917.31-3.52-1.466-3.308-4.146.666-8.428 1.115-16.874 1.666-25.602-6.827 2.152-13.142 4.058-19.392 6.16-2.027.682-4.01 1.687-5.786 2.88-3.107 2.088-5.062 4.973-4.04 8.908 1.004 3.859 4.013 5.692 7.707 6.137 3.29.397 6.654.477 9.941-.271 1.45-.33 2.859-.94 4.595-.043.439 4.056-1.126 6.68-5.485 6.89-4.317.207-8.682.395-12.97-.008-7.373-.692-12.08-4.923-13.445-11.401-1.382-6.56 1.576-12.605 7.985-16.274 3.94-2.255 8.253-3.522 12.59-4.72 4.007-1.107 8.087-1.997 12.01-3.347 3.705-1.276 6.656-3.778 5.987-8.1-.671-4.332-4.303-5.607-8.172-5.94-6.206-.534-12.295.175-18.233 2.095-1.402.453-2.72 1.327-4.65.805-.752-3.792-.688-7.07 4.34-7.886 1.805-.293 3.594-.673 5.83-1.115zM599.436 375.707c7.66 11.081 2.513 22.002-10.857 23.454-4.616.501-9.31.454-13.938-.433-7.137-1.368-7.476-1.808-6.596-9.749 5.285 1.265 10.422 3.223 15.979 2.794 3.736-.288 7.089-1.005 8.509-4.826 1.428-3.844-.489-6.72-3.411-9.126-3.984-3.279-8.119-6.412-11.825-9.985-4.585-4.419-8.24-9.526-5.369-16.373 2.742-6.537 8.446-8.551 14.993-8.785 2.992-.107 6.002-.094 8.989.096 7.325.467 7.688.95 7.228 8.858-4.22-.142-8.287-1.818-12.582-1.419-3.624.337-7.28.71-8.801 4.463-1.612 3.974 1.3 6.608 3.897 8.95 4.446 4.01 9.519 7.303 13.784 12.081zM683.769 341.594c-.54 11.926-.988 23.389-1.496 34.849-.25 5.646-1.006 11.302-.808 16.927.186 5.254-2.893 4.884-6.391 4.972-4.272.107-4.366-2.393-4.118-5.558 1.505-19.23 2.384-38.492 2.767-57.777.027-1.33.01-2.662.035-3.993.098-5.523 3.108-7.54 8.36-5.78 2.089.7 2.242 2.216 2.185 3.931a689.237 689.237 0 0 1-.534 12.429zM296.792 343.815c2.937.77 2.56 2.875 2.44 4.588-1.076 15.418-1.894 30.845-1.944 46.303-.014 4.282-3.09 3.494-5.64 3.572-2.595.08-5.164.108-4.968-3.71.51-9.954.756-19.926 1.507-29.86.34-4.49.428-8.96.468-13.443.068-7.65.035-7.65 8.137-7.45zM559.28 348.092c-1.033 15.554-2.014 30.648-1.893 45.774.037 4.653-2.71 4.343-5.852 4.482-3.643.16-5.125-1.184-4.883-4.911.59-9.117.72-18.27 1.532-27.365.535-5.992.368-11.96.48-17.938.05-2.693.623-4.703 3.84-4.404 2.81.26 6.883-1.507 6.776 4.362zM549.258 326.348c2.764-2.688 5.83-1.495 8.696-1.483 1.932.008 2.273 1.615 2.255 3.21-.02 1.793.35 4.004-1.792 4.709-2.68.88-5.723 1.141-8.231-.133-2.307-1.171-1.184-3.809-.928-6.303zM295.89 324.686c3.543-.186 4.461 1.454 4.311 4.28-.146 2.764-1.252 4.115-4.191 4.295-6.157.378-7.788-.792-7.13-5.443.63-4.454 4.068-2.721 7.01-3.132z"
        />
      </svg>
    </div>
  );
};

export default Name;
//TODO: GSAP SplitText plugin
//TODO:  follow video from E:\1. MERN\Final-Projects\resume_projects\RESOURCES
// TODO: add image  fix and finalize banner color + layout