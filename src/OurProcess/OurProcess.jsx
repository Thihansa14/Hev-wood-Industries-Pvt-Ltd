import React from 'react';
import './OurProcess.css';

const OurProcess = () => {
  return (
    <div className="process-container">
      <div className="process-header">
        <h1>OUR PROCESS</h1>
        <p>"From cutting and treating the wood to pressing and finishing, our meticulous process ensures every door is built to last. Discover the steps we take to craft doors that combine beauty and durability."</p>
        <img src="src\OurProcess\OurProcessHeader.png" alt="Our Process" className="process-header-image" />
      </div>

      <div className="process-step1">
        <h2>01 CUTTING AND TREATMENT</h2>
        <div className="step-content1">
          <img src="src\OurProcess\CuttingAndTreatment.png" alt="Cutting and Treatment" className="step-image" />
          <div className="step-text1">
            <p>At HEV-Wood Industries, the process begins with the careful selection and cutting of high-quality timber. We prioritize sustainability and source our wood from responsibly managed forests.</p>
            <p>Once the timber is cut to the required dimensions, it undergoes a Boron treatment. Boron is a chemical compound known for its efficacy in protecting wood against decay, wood-boring insects, and fungal attacks.</p>
            <p>The wood is submerged in a Boron solution for a specific period, ensuring deep penetration of the treatment. This process not only extends the life of the wood but also enhances its structural integrity.</p>
            <p>After treatment, the wood is thoroughly dried to remove excess moisture, further preventing potential decay and warping.</p>
          </div>
        </div>
      </div>

      <div className="process-step">
        <h2>02 FRAME MAKING</h2>
        <div className="step-content">
          <img src="src\OurProcess\FrameMaking.png" alt="Frame Making" className="step-image" />
          <div className="step-text">
            <p>The next step involves crafting the inner frames of the doors. We use boron-treated, kiln-dried natural rubber wood, renowned for its strength and resilience.</p>
            <p>The kiln-drying process is crucial as it reduces the wood's moisture content to optimal levels, minimizing the risk of warping and cracking over time. This process involves placing the wood in a large kiln where controlled heat and humidity levels are applied over several days.</p>
            <p>Skilled craftsmen assemble the treated wood into frames, ensuring precision and stability. Each frame is inspected for uniformity and strength, guaranteeing a robust foundation for the door.</p>
          </div>
        </div>
      </div>

      <div className="process-step1">
        <h2>03 GLUING</h2>
        <div className="step-content1">
          <img src="src\OurProcess\Gluing.png" alt="Gluing" className="step-image" />
          <div className="step-text1">
            <p>Once the frames are ready, we move on to attaching the plywood sheets. We use high-quality imported sheets, selected for their durability and aesthetic appeal.</p>
            <ul>
              <li>Ordinary Skin (2.7mm thickness)</li>
              <li>Teak (2.7mm and 3.7mm thickness)</li>
              <li>Mahogany (2.5mm thickness)</li>
            </ul>
            <p>These sheets are meticulously glued to the frame using industrial-grade adhesives. The adhesive application is uniform to ensure a strong bond between the frame and the sheets.</p>
            <p>After the adhesive is applied, the sheets are carefully aligned and pressed onto the frames, ready for the next stage of pressing.</p>
          </div>
        </div>
      </div>

      <div className="process-step">
        <h2>04 PRESSING</h2>
        <div className="step-content">
          <img src="src\OurProcess\Pressing.png" alt="Pressing" className="step-image" />
          <div className="step-text">
            <p>Pressing is a critical step in ensuring the strength and durability of our doors. Depending on the door type and desired characteristics, we utilize either hot pressing or cold pressing techniques.</p>
            <ul>
              <li>
                <strong>Hot Pressing:</strong> This method involves applying heat and pressure simultaneously, creating a strong bond between the plywood layers and the frame. Hot pressing is ideal for doors that require enhanced stability and resistance to environmental changes.
              </li>
              <li>
                <strong>Cold Pressing:</strong> Cold pressing uses pressure alone without the application of heat. This method is suitable for certain door types and structures where heat might affect the material's properties. Both pressing methods ensure that the doors are stable and durable, capable of withstanding various seasonal changes without compromising their integrity.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="process-step1">
        <h2>05 FINISHING</h2>
        <div className="step-content1">
          <img src="src\OurProcess\Finishing.png" alt="Finishing" className="step-image" />
          <div className="step-text1">
            <p>The final stage of the process is finishing, where each door is meticulously crafted to achieve the highest quality standards.</p>
            <ul>
              <li>Sanding: The doors are sanded to achieve a smooth, even surface, preparing them for the application of finishes.</li>
            </ul>
            <p>Throughout the finishing process, our quality control team inspects each door to ensure it meets our stringent standards. This attention to detail guarantees that every HEV-Wood door is not only beautiful but also built to last.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
