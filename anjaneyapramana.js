        AOS.init({
            duration: 800,
            easing: 'ease-in-out-sine',
            once: true,
            offset: 100
        });

        document.addEventListener('DOMContentLoaded', () => {
            if (document.getElementById('typed-output')) {
                new Typed('#typed-output', {
                    strings: [
                        'Dynamic, ethical, and result-oriented legal services.',
                        'Expert legal advocacy based in Patna, Bihar.',
                        'Committed to resolving your complex legal issues.'
                    ],
                    typeSpeed: 40,
                    backSpeed: 20,
                    backDelay: 3000,
                    loop: true,
                    showCursor: true,
                    cursorChar: '|'
                });
            }
        });

        function submitForm(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> <span>Redirecting...</span>';
            btn.disabled = true;
            
            const name = document.getElementById('contact-name').value;
            const phone = document.getElementById('contact-phone').value;
            const caseType = document.getElementById('contact-case').value || "Not Specified";
            const desc = document.getElementById('contact-desc').value || "No description provided.";
            
            const message = `*New Consultation Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Case Type:* ${caseType}\n*Description:* ${desc}`;
            
            window.open(`https://wa.me/917066160162?text=${encodeURIComponent(message)}`, '_blank');
            
            setTimeout(() => {
                document.getElementById('form-success').classList.remove('hidden');
                e.target.reset();
                btn.innerHTML = originalHTML;
                btn.disabled = false;
                
                setTimeout(() => {
                    document.getElementById('form-success').classList.add('hidden');
                }, 5000);
            }, 1000);
        }

        function toggleChatPopup() {
            const popup = document.getElementById('chat-popup');
            const icon = document.getElementById('chat-icon');
            
            if (popup.classList.contains('chat-widget-closed')) {
                popup.classList.remove('chat-widget-closed');
                popup.classList.add('chat-widget-open');
                
                icon.classList.remove('fa-comment-dots');
                icon.classList.add('fa-chevron-down');
            } else {
                popup.classList.remove('chat-widget-open');
                popup.classList.add('chat-widget-closed');
                
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-comment-dots');
            }
        }

        function sendWhatsAppChat() {
            const input = document.getElementById('wa-message-input');
            let message = input.value.trim();
            
            if (!message) {
                message = "Hi, I need some legal assistance.";
            }
            
            window.open(`https://wa.me/917066160162?text=${encodeURIComponent(message)}`, '_blank');
            
            input.value = '';
            toggleChatPopup();
        }

        const teamData = {
            'sachin': {
                name: 'Adv. Sachin Kumar',
                role: 'Founder & Managing Advocate | High Court, Supreme Court, DRT',
                img: 'https://i.ibb.co/Z6ShYC7P/Whats-App-Image-2026-04-11-at-3-18-16-PM.jpg',
                bio: `<p class="mb-3"><strong>Adv. Sachin Kumar</strong> is the Founder and Managing Advocate of Anjaneya Pramana Legal Associates, a Patna-based law firm committed to delivering strategic, ethical, and result-oriented legal solutions. He is a practicing advocate with substantial experience in Service, Education, Industrial Disputes, Banking and Financial litigation, SARFAESI proceedings, and Civil-Commercial disputes, representing clients before the Hon’ble High Court of Patna and Hon’ble Supreme Court, Debt Recovery Tribunal (DRT), Real Estate (Regulation and Development) Act, and various Civil and Criminal courts.</p>
                <p class="mb-4">With a focused practice in recovery and enforcement matters, Adv. Kumar has been actively involved in representing Banks, Financial institutions, and Individual Clients in complex legal proceedings. His approach combines strong legal acumen with practical strategy, ensuring effective resolution of disputes within the framework of law.</p>
                
                <h4 class="font-serif text-lg text-gold mb-2 border-b border-mahogany-border pb-1">Areas of Expertise</h4>
                <ul class="list-disc list-outside pl-4 space-y-1 mb-4 text-gray-300">
                    <li>Civil/Criminal Writ Matters</li>
                    <li>Criminal Matters (Bail, Quashing, Trial)</li>
                    <li>Matrimonial Matters</li>
                    <li>Civil & Commercial Litigation</li>
                    <li>Arbitration & Dispute Resolution</li>
                    <li>Property & Real Estate Matters</li>
                    <li>All kind of Industrial Disputes Matter</li>
                </ul>

                <h4 class="font-serif text-lg text-gold mb-2 border-b border-mahogany-border pb-1">Court Practice</h4>
                <ul class="list-disc list-outside pl-4 space-y-1 mb-4 text-gray-300">
                    <li>Hon’ble High Court & Supreme Court</li>
                    <li>Debt Recovery Tribunal (DRT) & Appellate Tribunal (DRAT)</li>
                    <li>Real Estate Regulating Authority (RERA) & Appellate Tribunal (REAT)</li>
                    <li>District Teacher Appellate Court</li>
                    <li>Integrated Child Development Services (ICDS)</li>
                    <li>Micro, Small, and Medium Enterprises (MSME)</li>
                    <li>Civil & Criminal Courts</li>
                </ul>

                <h4 class="font-serif text-lg text-gold mb-2 border-b border-mahogany-border pb-1">Professional Experience Highlights</h4>
                <ul class="list-disc list-outside pl-4 space-y-1 mb-4 text-gray-300">
                    <li>Represented banks and financial institutions in recovery proceedings and enforcement action.</li>
                    <li>Handled matters under the SARFAESI Act, including possession and recovery disputes.</li>
                    <li>Appeared Before Hon’ble High Court of Patna, Supreme Court in Writ Jurisdiction Matters, Criminal Jurisdictional Matters.</li>
                    <li>Drafted Legal Notices, Loan agreements, Petitions, and Written submissions.</li>
                    <li>Appeared in diverse civil and commercial litigation matters, matrimonial, mediation, and at various Tribunals.</li>
                </ul>

                <h4 class="font-serif text-lg text-gold mb-2 border-b border-mahogany-border pb-1">Education & Enrollment</h4>
                <ul class="list-disc list-outside pl-4 space-y-1 mb-4 text-gray-300">
                    <li>B.A. LL.B.</li>
                    <li>Diploma in Cyber Law.</li>
                    <li>Enrolled with the Bar Council of Bihar.</li>
                </ul>

                <h4 class="font-serif text-lg text-gold mb-2 border-b border-mahogany-border pb-1">Founder’s Vision</h4>
                <p>As the Founder of the firm, Adv. Sachin Kumar envisions building a client-centric legal practice grounded in integrity, efficiency, and practical legal solutions. His objective is to provide timely and effective legal services while maintaining the highest standards of professional ethics and client confidentiality.</p>`
            },
            'samridhi': {
                name: 'Kumari Samridhi Pandey',
                role: 'Advocate | District Courts, High Court',
                img: 'https://i.ibb.co/4Rg74TZH/Whats-App-Image-2026-04-04-at-2-25-03-PM.jpg',
                bio: `<ul class="space-y-4 text-gray-300">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Academic Profile:</strong> A driven law student pursuing her B.A. LL.B., with a strong inclination toward litigation and practical legal training.</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Practical Exposure:</strong> Has gained substantial exposure through her practice at the Patna High Court, District Courts, and the Debt Recovery Tribunal (DRT).</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Core Responsibilities:</strong> Actively involved in drafting pleadings, conducting legal research, preparing case briefs, and assisting in client handling.</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Work Ethic:</strong> Her work is marked by precision, diligence, and a sound understanding of procedural and substantive law.</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Skills & Approach:</strong> Proficient in English and Hindi and brings strong legal acumen, analytical ability, and professional communication skills, reflecting a focused and committed approach toward building a career in the legal profession.</span>
                    </li>
                </ul>`
            },
            'parkhi': {
                name: 'Parkhi Pankaj',
                role: 'Advocate | Associate',
                img: 'https://i.ibb.co/dsmL9n3j/Whats-App-Image-2026-04-04-at-2-23-08-PM.jpg',
                bio: `<ul class="space-y-4 text-gray-300">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Role & Focus:</strong> An advocate engaged in litigation and advisory work, with a strong focus on civil, criminal, and family law matters.</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Court Practice:</strong> Regularly assists in the preparation and handling of cases before the Hon'ble Patna High Court, District Courts, and other forums, with particular attention to drafting and procedural aspects.</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Core Responsibilities:</strong> Specializes in detailed legal research, preparation of pleadings, and providing comprehensive assistance in court proceedings.</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Approach:</strong> Approaches each matter with a practical understanding of legal issues, placing a strong emphasis on clarity and precision in drafting.</span>
                    </li>
                </ul>`
            },
            'aditya': {
                name: 'Aditya kr. Patel',
                role: 'Firm Manager | Management & Admin',
                img: 'https://i.ibb.co/Kc42CV6f/Whats-App-Image-2026-04-04-at-2-39-07-PM.jpg',
                bio: `<ul class="space-y-4 text-gray-300">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414-1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Professional Background:</strong> A motivated and detail-oriented professional, currently pursuing M.Com, with a strong foundation in Accounting and Financial Management. His preparation for competitive examinations has strengthened his analytical abilities, awareness of current affairs, and disciplined approach to problem-solving.</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Current Role:</strong> Working as a Legal Firm Manager, overseeing legal operations, managing client relationships, and coordinating team activities. He has developed expertise in ensuring smooth execution of legal processes, maintaining compliance, and enhancing operational efficiency within the firm.</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Key Strengths:</strong> Possesses key strengths in team management, strategic planning, and problem-solving, enabling him to effectively handle complex matters while maintaining high standards of client service. Committed to building structured systems and improving workflows.</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Academic Engagements:</strong> Actively participated in academic forums, including presenting at a National Conference on “Business Research in Contemporary Times.” Earned certification from a seminar on the New Education Policy 2020 and Personality Development.</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-gold mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span><strong>Vision:</strong> With a keen interest in the legal profession, he combines innovative thinking with a commitment to excellence, seeking opportunities to further develop his skills and make a meaningful contribution to the organization.</span>
                    </li>
                </ul>`
            },
            'mahendar': {
                name: 'Mahendar',
                role: 'Munsi (Clerk) | Patna Courts Registry',
                img: 'https://i.ibb.co/WpK3nq1S/Whats-App-Image-2026-04-04-at-1-38-32-PM.jpg',
                bio: `<p>Mahendar is an experienced Munsi at the firm, providing invaluable clerical support. He manages court filings, registry procedures, and day-to-day coordination at the Patna courts.</p>`
            },
            'suraj': {
                name: 'Suraj Kumar',
                role: 'Munsi (Clerk) | Patna Courts Registry',
                img: 'https://i.ibb.co/WpK3nq1S/Whats-App-Image-2026-04-04-at-1-38-32-PM.jpg',
                bio: `<p>Suraj Kumar serves as a reliable Munsi for Anjaneya Pramana Legal Associates. He ensures all document preparations, court listings, and filings are completed accurately and on time.</p>`
            }
        };

        function openTeamModal(id) {
            const data = teamData[id];
            if(!data) return;
            
            document.getElementById('modal-img').src = data.img;
            document.getElementById('modal-name').innerHTML = `<i class="fas fa-user-circle mr-3 opacity-80 text-xl"></i> ` + data.name;
            document.getElementById('modal-role').innerHTML = `<i class="fas fa-briefcase text-gold mr-2 opacity-80"></i> ` + data.role;
            document.getElementById('modal-bio').innerHTML = data.bio;
            
            const modal = document.getElementById('team-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            void modal.offsetWidth;
            modal.classList.remove('opacity-0');
            document.body.style.overflow = 'hidden';
        }

        function closeTeamModal(event) {
            if (event && event.target !== event.currentTarget) return;
            
            const modal = document.getElementById('team-modal');
            modal.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.remove('flex');
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        let currentSlide = 0;
        const totalSlides = 3;
        let slideInterval;

        window.prevSlide = function() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
            resetSlideInterval();
        };

        window.nextSlide = function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
            resetSlideInterval();
        };

        window.goToSlide = function(index) {
            currentSlide = index;
            updateSlider();
            resetSlideInterval();
        };

        function updateSlider() {
            const slider = document.getElementById('hero-slider');
            if(slider) {
                slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            }
            
            const dots = document.querySelectorAll('.indicator-dot');
            dots.forEach((dot, idx) => {
                if (idx === currentSlide) {
                    dot.classList.remove('bg-white/50');
                    dot.classList.add('bg-gold');
                } else {
                    dot.classList.remove('bg-gold');
                    dot.classList.add('bg-white/50');
                }
            });
        }

        function resetSlideInterval() {
            if (slideInterval) clearInterval(slideInterval);
            slideInterval = setInterval(window.nextSlide, 5000);
        }

        resetSlideInterval();

        document.addEventListener('DOMContentLoaded', () => {
            const menuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            menuBtn.addEventListener('click', () => {
                if (mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.remove('hidden');
                    mobileMenu.classList.add('flex');
                } else {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                }
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                });
            });

            const faqToggles = document.querySelectorAll('.faq-toggle');
            faqToggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const content = toggle.nextElementSibling;
                    const icon = toggle.querySelector('.faq-icon');

                    document.querySelectorAll('.faq-content').forEach(c => {
                        if (c !== content) {
                            c.classList.remove('open');
                            c.style.paddingBottom = '0';
                            c.previousElementSibling.querySelector('.faq-icon').classList.remove('open');
                        }
                    });

                    content.classList.toggle('open');
                    icon.classList.toggle('open');
                    
                    if (content.classList.contains('open')) {
                        content.style.paddingBottom = '1.5rem';
                    } else {
                        content.style.paddingBottom = '0';
                    }
                });
            });
        });
