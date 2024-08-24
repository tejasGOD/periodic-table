body {
  /* background-color: #F7FAFC; */
  background-color: #2d3748;
  overflow-x: hidden;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #17045100;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #097f63cd;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #097f63;
}

.🧪 {
  font-family: "Kanit", sans-serif;
  font-weight: 100;
  font-style: normal;
  background-color: #e2e8f0;
  padding: 0.5rem;
  border-radius: 0.1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  transition: transform 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.🧪:hover {
  transform: scale(1.25);
}
.title {
  font-family: "Matemasie", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4rem;
  color: blanchedalmond;
}
.cont {
  width: 100%;
  overflow-x: scroll;
}
.ta {
  margin: auto;
  max-width: 1100px;
  min-width: 800px;
}

#search-box {
  background-color: #f7fafc;
}

.highlighted {
  transition: all 0.2s;
  border: 3px solid rgb(255, 255, 255);
  border-radius: 1px;
}
.hydro {
  background-color: gold;
  transform: scale(1.25);
}

.mod-cunt {
  max-height: 90vh;
  overflow-y: auto;
}
#modal {
  /* display: none;  */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

#modal-content {
  /* background-color: #000000; */
  max-height: 60vh;
  overflow-y: scroll;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 2px;
  width: 100%;
  max-width: 600px;
}

#modal-title {
  /* background-color: #000000; */
  padding: 15vh 0;
  text-align: center;
  height: 30vh;
  color: azure;
  font-size: 24px;
  margin-bottom: 10px;
}

#close-modal {
  font-size: 50px;
  cursor: pointer;
  position: absolute;
  color: red;
  top: 10px;
  right: 10px;
}
