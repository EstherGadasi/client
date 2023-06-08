import React, { useEffect, useState } from "react";
// import reorderList from "./reorderList";

// import "./styles.css";

function Datagrid({ selectOption, names,setSelectedOption }) {

    const [items, setItems] = useState( [names])

    const [dragged, setDragged] = useState(null);
    const [mouse, setMouse] = useState([0, 0]);
    const [closestDropZone, setClosestDropZone] = useState(0);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dragged !== null) {
                e.preventDefault();
                setDragged(null);

                setItems((items) => reorderList(items, dragged, closestDropZone));
            }
        };

        document.addEventListener("mouseup", handler);
        return () => document.removeEventListener("mouseup", handler);
    });

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            setMouse([e.x, e.y]);
        };


        document.addEventListener("mousemove", handler);

        return () => document.removeEventListener("mousemove", handler);
    }, []);
    useEffect(() => {
        let arr = []
        names.forEach(element => {
            arr.push(selectOption.find((e) => 
                e.name == element
            ))
        });
setSelectedOption(arr)
    }, [names]);

    useEffect(() => {
        if (dragged !== null) {
            const elements = Array.from(document.getElementsByClassName("drop-zone"));
            const positions = elements.map((e) => e.getBoundingClientRect().top);
            const absDifferences = positions.map((v) => Math.abs(v - mouse[1]));
            let result = absDifferences.indexOf(Math.min(...absDifferences));

            if (result > dragged) result += 1;

            setClosestDropZone(result);
        }
    }, [dragged, mouse]);
    const _reorderForward = (l, start, end) => {
        const temp = l[start];

        for (let i = start; i < end; i++) {
            if (i + 1 < l.length) l[i] = l[i + 1];
        }

        l[end - 1] = temp;

        return l;
    };

    const _reorderBackward = (l, start, end) => {
        const temp = l[start];

        for (let i = start; i > end; i--) {
            if (i > 0) l[i] = l[i - 1];
        }

        l[end] = temp;

        return l;
    };

    const reorderList = (l, startIndex, endIndex) => {
        if (startIndex < endIndex)
            return _reorderForward(l.slice(), startIndex, endIndex);
        else if (startIndex > endIndex)
            return _reorderBackward(l.slice(), startIndex, endIndex);
        else return l;
    };
    return (
        <>
            {dragged !== null && (
                <div
                    className="floating list-item"
                    style={{
                        left: `${mouse[0]}px`,
                        top: `${mouse[1]}px`
                    }}
                >
                    <p>{items[dragged]}</p>
                </div>
            )}
            <div className="list">
                <div
                    key={`0-drop-zone-a`}
                    className={`list-item drop-zone ${dragged === null || closestDropZone !== 0 ? "hidden" : ""
                        }`}
                />
                {items.map((v, i) => (
                    <>
                        {dragged !== i && (
                            <>
                                <div
                                    key={v}
                                    className="list-item"
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        setDragged(i);
                                        setClosestDropZone(i);
                                    }}
                                >
                                    <p>{v}</p>
                                </div>

                                <div
                                    key={`${v}-drop-zone`}
                                    className={`list-item drop-zone ${dragged === null || closestDropZone !== i + 1
                                            ? "hidden"
                                            : ""
                                        }`}
                                    onMouseUp={(e) => {
                                        e.preventDefault();

                                        if (dragged !== null) {
                                            setDragged(null);
                                        }
                                    }}
                                ></div>
                            </>
                        )}
                    </>
                ))}
            </div>
        </>
    );
}
export default Datagrid